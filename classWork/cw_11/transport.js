let Transport = (function () {
    let singleTransport;
    function Transport() {

        function getDataFetch(url) {
            return fetch(url)
                .then(function (response) {
                    return response.json()
                })
        }

        this.getData = function (url) {
            return getDataFetch(url)
        }
    }
    singleTransport = new Transport();
    return singleTransport;
})();



