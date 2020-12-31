
   var selectDropdown = d3.select("#selDataset");

   d3.json("samples.json").then((data)=> {
    console.log(data)

    function makePlot() {
    var sample_values = data.samples[0].sample_values;
    console.log(sample_values);
    var otu_ids = data.samples[0].otu_ids;
    console.log(otu_ids);
    var otu_labels =  data.samples[0].otu_labels;
    console.log(otu_labels);



    sample_values = sample_values.slice(0,10);
    console.log(sample_values);
    otu_ids = otu_ids.slice(0, 10).reverse();
    console.log(otu_ids);
    otu_labels = otu_labels.slice(0, 10).reverse();
    console.log(otu_labels);

    //data.names.forEach(function(name){

         // Bar chart
        var trace1 = {

            x: sample_values,
            y: otu_ids,
            type: "bar",
            orientation: "h",
            text: otu_labels
          }

          var data = [trace1]

          var layout = {
              title: "Top OTUs",
          }

          Plotly.newPlot("bar", data, layout);

          //Bubble chart

          var trace2 = {
            type: "scatter",
            x: otu_ids,
            y: sample_values,
            type: "bubble",
            text: ['otu_labels'],
            mode: "markers",
            marker: {
              color: otu_ids,
              size: sample_values
            }
          };

          var layout = {

          }
    var dropDown = d3.select("#selDataset");
}
    var names = data.names;

    d3.select("#selDataset").selectAll("option").data(names)
    }) 

function makePlot() {
    d3.json("samples.json").then(function(data){
        console.log(data);
        var otu_id = sampledata.otu_ids.slice(0,10).map(oi => "OTU"+ oi);
    });



// Bubble chart

function unpack(rows, index) {
    return rows.map(function(row){
        return row[index];
        });
}


// d3.select("#stockInput").node().value = "" ;

// function buildTable(dates, openPrices, highPrices, lowPrices, closingPrices, volume)
//     var table = d3.select("#summary-table");
//     var tbody = table.select("tbody");
//     var trow;
//     for (var i = 0; i < 12; i++){
//         trow.append("td").text(dates[i]);
//         trow.append("td").text(openPrices[i]);
//         trow.append("td").text(highPrices[i]);
//         trow.append("td").text(lowPrices[i]);
//         trow.append("td").text(closingPrices[i]);
//         trow.append("td").text(volume[i]);
    


// }

// // Reload functions

function optionChanged () {
    id = d3.select("#selectData").property("value");
   reload(id)
    return id
}