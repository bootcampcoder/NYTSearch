


function getData(e){
       e.preventDefault();
var searchTerm  = $("#searchTerm").val();
var article = $("#noOfRecords").val();
var startYear =$("#startYear").val();
var endYear =$("#endYear").val();
var apikey = "GKxIECupUVJw7yNS0boFsnoP0n8SX9f7";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=“+searchTerm+“&begin_date=“+startYear+“&end_date=“+endYear+“&api-key="+apikey;
var queryURL1 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&page="+article+"&api-key="+apikey;
var queryURL2 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&api-key="+apikey;
var queryURL3 ="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=&api-key=GKxIECupUVJw7yNS0boFsnoP0n8SX9f7";

       $.ajax({
        url: queryURL2,
        method: "GET"
       }).then((response)=>{
           console.log(response);

          var result = response.response.docs;

           console.log(result)
           //debugger;

           result.forEach(element => {
            var div = $("<div>");

            $(".card-body").append(`<p> ${element.headline.main}</p>`);
            $(".card-body").append(`<p> ${element.section_name}</p>`);
            $(".card-body").append(`<p> ${element.pub_date}</p>`);

       });


       });
}


$("#search").on("click",getData);
