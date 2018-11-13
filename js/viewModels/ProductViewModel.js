var testData = "data/data.json";

$(function () {
    function ProductViewModel(data) {
        var self = this;

        // This automatically creates observable properties for each of the properties on data
        ko.mapping.fromJS(data, {}, self);
    }

    $.getJSON(testData, function (data) {
        // bind the data
        ko.applyBindings(new ProductViewModel(data));

        // apply DataTables magic
        $("#products").DataTable({responsive: true});
    });
});