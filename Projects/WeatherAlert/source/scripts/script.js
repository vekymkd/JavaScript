let navService = {
    navItems: document.getElementsByClassName("nav-item"),
    navSearch: document.getElementById("citySearchInput"),
    searchBtn: document.getElementById("citySearchBtn"),
    pages: document.getElementById("pages").children,
    month: "",
    minutes: "",
    callsPerMinute: 0,
    callsPerMonth: 0,
    loadData: false,
    activateItem: function (item) {
        for (let navItem of this.navItems) {
            navItem.classList.remove("active")
        }
        item.classList.add("active")
    },
    showPage: function (page) {
        for (let pageElement of this.pages) {
            pageElement.style.display = "none"
        }
        page.style.display = "block"
    },
    registerCalls: function () {
        if (this.callsPerMinute < 59 && this.minutes === new Date().getMinutes()
            && this.callsPerMonth < 1000000 && this.month === new Date().getMonth()) {
            navService.callsPerMinute++
            navService.callsPerMonth++
            console.log(navService.callsPerMinute)
            console.log(navService.callsPerMonth)
            return navService.loadData = true
        }
        else if (this.minutes !== new Date().getMinutes() && this.month !== new Date().getMonth()) {
            navService.month = new Date().getMonth()
            navService.minutes = new Date().getMinutes()
            navService.callsPerMinute = 0;
            navService.callsPerMonth = 0;
            return navService.loadData = true
        }
        else {
            return navService.loadData = false
        }
    },
    registerNavListeners: function () {
        for (let i = 0; i < this.navItems.length; i++) {
            this.navItems[i].addEventListener("click", function () {
                navService.activateItem(this)
                navService.showPage(navService.pages[i])
            })
        }
        this.searchBtn.addEventListener("click", function (event) {
            event.preventDefault()
            weatherService.city = navService.navSearch.value
            navService.registerCalls()
            uiService.loading(true)
            if (navService.loadData === true) {
                weatherService.getDataAsync()
            }
            else {
                errorToggle.limitCall();
                uiService.loading(false)
            }
        })
    },
}

let weatherService = {
    apiKey: "f9fc7006d7ad932155d879cfc36bfe0d",
    city: "skopje",
    apiUrl: "https://api.openweathermap.org/data/2.5/forecast",
    
    getDataAsync: async () => {
        try {
            let result = await fetch(`${weatherService.apiUrl}?q=${weatherService.city}&units=metric&appid=${weatherService.apiKey}`)
            weatherService.weatherData = await result.json();
            console.log(weatherService.weatherData)
            uiService.loading(false)
            uiService.loadStatistics(weatherService.weatherData)
            uiService.loadHourlyTable(weatherService.weatherData)
            uiService.statisticsCity.innerHTML = weatherService.weatherData.city.name
            uiService.hdCity.innerHTML = weatherService.weatherData.city.name
        }
        catch (error) {
            console.log(error)
        }
    },
    aggregateStatistics: function (data) {
        let temperatureSum = 0;
        let highestTemperature = data.list[0]
        let lowestTemperature = data.list[0]
        let humiditySum = 0
        let highestHumidity = data.list[0]
        let lowestHumidity = data.list[0]

        for (let reading of data.list) {
            temperatureSum += reading.main.temp
            humiditySum += reading.main.humidity

            if (highestTemperature.main.temp < reading.main.temp) {
                highestTemperature = reading
            }

            if (highestTemperature.main.temp > reading.main.temp) {
                lowestTemperature = reading
            }

            if (highestHumidity.main.humidity < reading.main.humidity) {
                highestHumidity = reading
            }

            if (lowestHumidity.main.humidity > reading.main.humidity) {
                lowestHumidity = reading
            }
        }

        return {
            temperature: {
                highest: highestTemperature.main.temp,
                average: temperatureSum / data.list.length,
                lowest: lowestTemperature.main.temp
            },
            humidity: {
                highest: highestHumidity.main.humidity,
                average: humiditySum / data.list.length,
                lowest: lowestHumidity.main.humidity
            },
            warmentsTime: helperService.unixTimeStampToDate(highestTemperature.dt),
            coldestTime: helperService.unixTimeStampToDate(lowestTemperature.dt)
        }
    }
}

let uiService = {
    statisticResult: document.getElementById("statisticsResult"),
    tableResult: document.getElementById("tableResult"),
    hdCity: document.getElementById("hdCity"),
    statisticsCity: document.getElementById("statisticsCity"),
    loader: document.getElementById("loader"),
    loadStatistics: function (data) {
        let statisticsData = weatherService.aggregateStatistics(data)
        this.statisticResult.innerHTML = `
            <div class="mb-5">
                <div class="row">
                    <div class="col-md-6">MAX TEMP: ${Math.round(statisticsData.temperature.highest)} C</div>
                    <div class="col-md-6">MAX HUMD: ${statisticsData.humidity.highest} %</div>
                </div>
                <div class="row">
                    <div class="col-md-6">AVG TEMP: ${statisticsData.temperature.average.toFixed(1)} C</div>
                    <div class="col-md-6">AVG HUMD: ${statisticsData.humidity.average} %</div>
                </div>
                <div class="row">
                    <div class="col-md-6">LOW TEMP: ${Math.round(statisticsData.temperature.lowest)} C</div>
                    <div class="col-md-6">LOW HUMD: ${statisticsData.humidity.lowest} %</div>
                </div>
            </div>
            <h4>Warmest time of the following period: ${statisticsData.warmentsTime.toDateString()} </h4>
            <h4>Coldest time of the following period: ${statisticsData.coldestTime.toDateString()} </h4>
        `
        if (data.message != 0) {
            errorToggle.errMsg()
        }
    },
    listInfo: 0,
    infoPerPage: 9,
    page: 1,
    pages: 0,
    loadHourlyTable: (data) => {
        this.pages = data.list.length / 10;
        if(data.message === 0 || data.message === ""){
            uiService.tableResult.innerHTML = ""
        }
            for (let i = uiService.listInfo; i < uiService.infoPerPage; i++) {
                this.tableResult.innerHTML += `
                    <div class="row">
                        <div class="col-md-2">
                            <img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" alt="weahter-icon">
                        </div>
                        <div class="col-md-2">${data.list[i].weather[0].description}</div>
                        <div class="col-md-2">${helperService.unixTimeStampToDate(data.list[i].dt).toDateString()}
                                            ${helperService.formatedTime(data.list[i].dt)}</div>
                        <div class="col-md-2">${Math.round(data.list[i].main.temp)} 'C (Feels Like ${Math.round(data.list[i].main.feels_like)} 'C)</div>
                        <div class="col-md-2">${data.list[i].main.humidity}%</div>
                        <div class="col-md-2">${data.list[i].wind.speed}m/s</div>
                    </div>
                `
            }
            this.tableResult.innerHTML += `
            <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <button id="previous" style="margin-right:15px">Previous</button>
                </li>
                <li class="page-item">
                    <button id="next">Next</button>
                </li>
            </ul>
        </nav>`
            document.getElementById("previous").style.display = "none";
            document.getElementById("previous").addEventListener("click", () => {
                uiService.listInfo = uiService.listInfo - 10;
                uiService.infoPerPage = uiService.infoPerPage - 10;
                uiService.page--
                uiService.loadHourlyTable(data)
                if (uiService.page <= 1) {
                    document.getElementById("previous").style.display = "none";
                }
                else {
                    document.getElementById("previous").style.display = "block"
                }
                if (uiService.page === Math.ceil(pages)) {
                    document.getElementById("next").style.display = "none";
                }
                else {
                    document.getElementById("next").style.display = "block"
                }
            })
            document.getElementById("next").addEventListener("click", () => {
                uiService.listInfo = uiService.listInfo + 10;
                uiService.infoPerPage = uiService.infoPerPage + 10;
                uiService.page++
                uiService.loadHourlyTable(data)
                if (uiService.page <= 1) {
                    document.getElementById("previous").style.display = "none";
                }
                else {
                    document.getElementById("previous").style.display = "block"
                }
                if (uiService.page === Math.ceil(pages)) {
                    document.getElementById("next").style.display = "none";
                }
                else {
                    document.getElementById("next").style.display = "block"
                }
            })
    },
    loading: function (load) {
        if (load) {
            uiService.loader.style.display = "block";
        }
        else {
            uiService.loader.style.display = "none";
        } 
    }
}

let helperService = {
    unixTimeStampToDate: (unixTimeStamp) => {
        return new Date(unixTimeStamp * 1000)
    },
    formatedTime: (formatTime) => {
        newTime = new Date(formatTime * 1000);
        let hours = newTime.getHours();
        let minutes = "0" + newTime.getMinutes();
        let formated = `${hours}:${minutes.substr(-2)}`;
        return formated;
    }
}
let errorToggle = {
    errMsg: function (error) {
        uiService.statisticsCity.innerHTML = ""
        uiService.hdCity.innerHTML = ""
        uiService.statisticResult.innerHTML = `<h1>${error.cod} <span class"errorText">${error.message}</span> </h1>`
        uiService.tableResult.classList.remove("table")
        uiService.tableResult.innerHTML = `<h1>${error.cod} <span class"errorText">${error.message}</span> </h1>`
    },
    limitCall: function () {
        uiService.statisticsCity.innerHTML = "";
        uiService.hdCity.innerHTML = "";
        uiService.statisticResult.innerHTML = `<h1>API call limit is reached</h1>`;
        uiService.tableResult.classList.remove("table");
        uiService.tableResult.innerHTML = `<h1>API call limit is reached</h1>`;
    }

}
navService.registerNavListeners()
weatherService.getDataAsync()

