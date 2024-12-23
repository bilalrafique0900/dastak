import { Component} from '@angular/core';
import { HttpService } from '../core/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../core/services/session.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  dashboarddata: any={};
  constructor(private Srv:HttpService,
    private session:SessionService,
    private router:Router,
       private route:ActivatedRoute
  ){
    
  this.GetAll();
  }
  GetAll() {
    this.Srv.GetData(`Dashboard/home`).subscribe({
      next: (res: any) => {
        
        if (res.data) {
          this.dashboarddata = res.data;

          const topCities = this.dashboarddata.topCities;
      // Map API response to chart dataPoints
      this.chartOptions.data[0].dataPoints = topCities.map((city: any) => ({
        y:city.count,
        name: city.city
      }));
      const admissionss =this.dashboarddata.admissions;  // Example data from API

      // Update chartOptions2 dataPoints dynamically
      this.chartOptions2.data[0].dataPoints = admissionss.map((admission: number, index: number) => ({
        label: index === 0 ? 'Current' : `${index}`,  // For first data point use "Current"
        y: admission  // Set the 'y' value to the corresponding admission count
      }));
      const admissions =this.dashboarddata.admissions;  // Example data from API

      // Update chartOptions2 dataPoints dynamically
      this.chartOptions12.data[0].dataPoints = admissions.map((admission: number, index: number) => ({
        label: index === 0 ? 'Current' : `${index}`,  // For first data point use "Current"
        y: admission  // Set the 'y' value to the corresponding admission count
      }));
      const depaarture =this.dashboarddata.departure; // API response data for departures
// Update chartOptions4 dataPoints dynamically
this.chartOptions4.data[0].dataPoints = depaarture.map((value: number, index: number) => ({
  label: index === 0 ? 'Current' : `${index}`,  // Set label to "Current" for first data point
  y: value  // Set the 'y' value to the departure data from API
}));
const departure =this.dashboarddata.departure; // API response data for departures
// Update chartOptions4 dataPoints dynamically
this.chartOptions13.data[0].dataPoints = departure.map((value: number, index: number) => ({
  label: index === 0 ? 'Current' : `${index}`,  // Set label to "Current" for first data point
  y: value  // Set the 'y' value to the departure data from API
}));

const admissionsyear =this.dashboarddata.admissionsLastYear; // API response data for departures
// Update chartOptions4 dataPoints dynamically
this.chartOptions7.data[0].dataPoints = admissionsyear.map((value: number, index: number) => {
  const currentDate = new Date(); // Get the current date
  const newDate = new Date(currentDate); // Create a new Date object to avoid mutation
  newDate.setMonth(currentDate.getMonth() - index); // Subtract the index from the current month

  const monthName = newDate.toLocaleString('default', { month: 'short' }); // Get the short month name (e.g., "Jan", "Feb")
  
  return {
    label: monthName,  // Use short month name as label
    y: value  // Set the 'y' value to the departure data from API
  };
});

const departureyear =this.dashboarddata.departureLastYear; // API response data for departures
// Update chartOptions4 dataPoints dynamically
this.chartOptions8.data[0].dataPoints = departureyear.map((value: number, index: number) => {
  const currentDate = new Date(); // Get the current date
  const newDate = new Date(currentDate); // Create a new Date object to avoid mutation
  newDate.setMonth(currentDate.getMonth() - index); // Subtract the index from the current month

  const monthName = newDate.toLocaleString('default', { month: 'short' }); // Get the short month name (e.g., "Jan", "Feb")
  
  return {
    label: monthName,  // Use short month name as label
    y: value  // Set the 'y' value to the departure data from API
  };
});


const medicall =this.dashboarddata.medical;  // Example API response for medical data

// Update chartOptionsnoData dataPoints dynamically
this.chartOptionsnoData.data[0].dataPoints = medicall.map((value: number, index: number) => ({
  label: index === 0 ? 'Current' : `${index}`,  // Set label to "Current" for first data point
  y: value  // Set the 'y' value to the medical data from API
}));
const medical =this.dashboarddata.medical;  // Example API response for medical data

// Update chartOptionsnoData dataPoints dynamically
this.chartOptionsnoData1.data[0].dataPoints = medical.map((value: number, index: number) => ({
  label: index === 0 ? 'Current' : `${index}`,  // Set label to "Current" for first data point
  y: value  // Set the 'y' value to the medical data from API
}));


const psychologicall = this.dashboarddata.psychological;    // API response data for psychological assistance

// Update chartOptions5 dataPoints dynamically
this.chartOptions5.data[0].dataPoints = psychologicall.map((value: number, index: number) => ({
  label: index === 0 ? 'Current' : `${index}`,  // Set label to "Current" for first data point
  y: value  // Set the 'y' value to the psychological data from API
}));

const psychological = this.dashboarddata.psychological;    // API response data for psychological assistance

// Update chartOptions5 dataPoints dynamically
this.chartOptions15.data[0].dataPoints = psychological.map((value: number, index: number) => ({
  label: index === 0 ? 'Current' : `${index}`,  // Set label to "Current" for first data point
  y: value  // Set the 'y' value to the psychological data from API
}));
// If your chart library requires re-rendering, ensure to trigger it after the update.


// If your charting library requires it, ensure to trigger re-rendering after updating the data.

// If the chart library you're using requires re-rendering the chart, ensure to trigger it.


      const interventions = this.dashboarddata.interventions;
      // Map API response to chart dataPoints, with index as the "name"
      this.chartOptions3.data[0].dataPoints = interventions.map((item: any, index: number) => ({
        y: item,
        name: index === 0 ? 'This month' : `${index} months ago`
      }));
        }
      },
      error: (err) => {
       // this.usernameError = err ? err.Message : '';
      },
    });
  }

  chartOptions = {
	  animationEnabled: true,
	  title: {
		text: "Top Cities"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##",
		dataPoints: [
		  { y: 10, name: "Faisalabad" },
		  { y: 15, name: "Kasur" },
		  { y: 5, name: "Okara" },
      { y: 10, name: "Sheikhupura" },
		  { y: 60, name: "Lahore" }
		]
	  }]
	}	
  chartOptions3 = {
	  animationEnabled: true,
	  title: {
		text: "No. of Interventions"
	  },
	  data: [{
		type: "pie",
		startAngle: -110,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###",
		dataPoints: [
		  { y: 100, name: "2 months ago" },
		  { y: 0, name: "3 months ago" },
		  { y: 0, name: "4 months ago"},
      { y: 0, name: "5 months ago" },
      { y: 0, name: "1 month ago" },
		  { y: 0, name: "this month" }
		]
	  }],
	}	


  chartOptions7 = {
	  animationEnabled: true,
	  title: {
		text: "Admissions"
	  },
	  axisY: {
		title: "Number of Admissions"
	  },
	  data: [{
	    type: "column",	
      color: "#ffc107",
	    dataPoints:[
        { label: "Sep", y: 0 }, // Use string labels here
        { label: "Oct", y: 1 },
        { label: "Nev", y: 2},
        { label: "Dec", y: 3},
        { label: "Jan", y: 4},
        { label: "Jul", y: 5 },
	  ]
	  },]
  }
  // chartOptions8 = {
	//   animationEnabled: true,
	//   title: {
	// 	text: "DEPARTURES"
	//   },
	//   axisX: {
	// 	labelAngle: -90
	//   },
	//   axisY: {
	// 	title: "Number of Departure"
	//   },
	//   axisY2: {
	// 	title: ""
	//   },
	//   toolTip: {
	// 	shared: true
	//   },
	//   legend:{
	// 	cursor:"pointer",
	// 	itemclick: function(e: any){
	// 	  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
	// 		e.dataSeries.visible = true;
	// 	  }
	// 	  else {
	// 		e.dataSeries.visible = true;
	// 	  }
	// 	  e.chart.render();
	// 	}
	//   },
	//   data: [{
	//     type: "column",	
	//     name: "",
	//     legendText: "",
	//     showInLegend: true, 
	//     dataPoints:[
	//   	  { label: "Sep", y: 0 }, // Use string labels here
  //       { label: "Oct", y: 1 },
  //       { label: "Nev", y: 2},
  //       { label: "Dec", y: 3},
  //       { label: "Jan", y: 4},
  //       { label: "Jul", y: 5 },
  //       { label: "Sep", y: 6 }, // Use string labels here
  //       { label: "Oct", y: 7 },
  //       { label: "Nev", y: 8},
  //       { label: "Dec", y: 9},
  //       { label: "Jan", y: 10},
  //       { label: "Jul", y: 11 }
	  	  
	//   ]
	//   },]
  // }
  chartOptions8 = {
    title:{
      text: "Departure"  
    },
    axisY: {
      title: "Number of Departure"
      },
    animationEnabled: true,
    data: [{        
      type: "column",
      color: "black",
      dataPoints: [
        { x: 'Sep', y: 71 },
        { x: 'Sep', y: 55 },
        { x: 'Sep', y: 50 },
        { x: 'Sep', y: 65 },
        { x: 'Sep', y: 95 },
        { x: 'Sep', y: 68 },
        { x: 'Sep', y: 28 },
        { x: 'Sep', y: 34 },
        { x: 'Sep', y: 14 },
        { x: 'Sep', y: 14 },
        { x: 'Sep', y: 14 },
        { x: 'Sep', y: 14 }
      ]
    }]
  }	
  chartOptions2 = {
    animationEnabled: true,
    title: {
        text: "No. of Admissions"
    },
    axisY: {
        title: "",
        valueFormatString: "",
        suffix: ""
    },
    data: [{
        type: "splineArea",
        color: "rgba(54,158,173,.7)",
        xValueFormatString: "yyyy",
        dataPoints: [
          { label: "Current", y: 0 }, // Use string labels here
          { label: "1", y: 1 },
          { label: "2", y: 2},
          { label: "3", y: 3},
          { label: "4", y: 4},
          { label: "5", y: 5 },
        ]
    }]
}

chartOptions12 = {
  title:{
    text: "No. of Admissions"  
  },
  animationEnabled: true,
  data: [{        
    type: "column",
    color:"black",
    dataPoints: [
      { label: "Current", y: 0 }, // Use string labels here
      { label: "1", y: 1},
      { label: "2", y: 2},
      { label: "3", y: 3},
      { label: "4", y: 4},
      { label: "5", y: 5 },
      
    ]
  }]
}
chartOptions13 = {
  title:{
    text: "Departure Details"
  },
  animationEnabled: true,
  data: [{        
    type: "column",
    color: "#ffc107",
    dataPoints: [
      { label: "Current", y: 0 }, // Use string labels here
      { label: "1", y: 2 },
      { label: "2", y: 4},
      { label: "3", y: 6},
      { label: "4", y: 8 },
      { label: "5", y: 10 },
    ]
  }]
}
chartOptionsnoData1 = {
  title:{
    text: "Medical Assistance Sought"
  },
  axisX: {
    labelFormatter: (e: any) => e.label // Format x-axis to show string labels
  },
  axisY: {
    labelFormatter: (e: any) => {
      var suffixes = [""];
      var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
      if (order > suffixes.length - 1)
        order = suffixes.length - 1;

      var suffix = suffixes[order];

     return "" + (e.value / Math.pow(1000, order)) + suffix;
    }
  },
  animationEnabled: true,
  data: [{        
    type: "column",
    color: "#ffc107",
    dataPoints: [
      { label: "Current",y:0 }, // Use string labels here
      { label: "1" },
      { label: "2"},
      { label: "3"},
      { label: "4"},
      { label: "5" },
    ]
  }]
}
chartOptions15 = {
  title:{
    text: "Psychological Assistance Sought"
  },
  axisY: {
    labelFormatter: (e: any) => {
      var suffixes = [""];
      var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
      if (order > suffixes.length - 1)
        order = suffixes.length - 1;

      var suffix = suffixes[order];

     return "" + (e.value / Math.pow(1000, order)) + suffix;
    }
  },
  animationEnabled: true,
  data: [{        
    type: "column",
    color: "#black",
    dataPoints: [
      { label: "Current",y:0 }, // Use string labels here
      { label: "1" },
      { label: "2"},
      { label: "3"},
      { label: "4"},
      { label: "5" },
    ]
  }]
}
chart: any;
	
chartOptions4 = {
  theme: "light2",
  animationEnabled: true,
  zoomEnabled: true,
  title: {
    text: "Departure Details"
  },
  axisX: {
    labelFormatter: (e: any) => e.label // Format x-axis to show string labels
  },
  axisY: {
    labelFormatter: (e: any) => {
      var suffixes = [""];
      var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
      if (order > suffixes.length - 1)
        order = suffixes.length - 1;

      var suffix = suffixes[order];
      return "" + (e.value / Math.pow(1000, order)) + suffix;
    }
  },
  data: [{
    type: "line",
    xValueFormatString: "", // No need for date formatting
    yValueFormatString: "#,###.##",
    dataPoints: [
      { label: "Current", y: 0 }, // Use string labels here
      { label: "1", y: 2 },
      { label: "2", y: 4},
      { label: "3", y: 6},
      { label: "4", y: 8 },
      { label: "5", y: 10 },
    ]
  }]
}

chartOptionsnoData = {
  theme: "light2",
  animationEnabled: true,
  zoomEnabled: true,
  title: {
    text: "Medical Assistance Sought"
  },
  axisX: {
    labelFormatter: (e: any) => e.label // Format x-axis to show string labels
  },
  axisY: {
    labelFormatter: (e: any) => {
      var suffixes = [""];
      var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
      if (order > suffixes.length - 1)
        order = suffixes.length - 1;

      var suffix = suffixes[order];

     return "" + (e.value / Math.pow(1000, order)) + suffix;
    }
  },
  data: [{
    type: "line",
    xValueFormatString: "", // No need for date formatting
    yValueFormatString: "#,###.##",
    dataPoints: [
      { label: "Current",y:0 }, // Use string labels here
      { label: "1" },
      { label: "2"},
      { label: "3"},
      { label: "4"},
      { label: "5" },
    ]
  }]
}
chartOptions5 = {
  theme: "light2",
  animationEnabled: true,
  zoomEnabled: true,
  title: {
    text: "Psychological Assistance Sought"
  },
  axisX: {
    labelFormatter: (e: any) => e.label // Format x-axis to show string labels
  },
  axisY: {
    labelFormatter: (e: any) => {
      var suffixes = [""];
      var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
      if (order > suffixes.length - 1)
        order = suffixes.length - 1;

      var suffix = suffixes[order];

     return "" + (e.value / Math.pow(1000, order)) + suffix;
    }
  },
  data: [{
    type: "line",
    xValueFormatString: "", // No need for date formatting
    yValueFormatString: "#,###.##",
    dataPoints: [
      { label: "Current",y:0 }, // Use string labels here
      { label: "1" },
      { label: "2"},
      { label: "3"},
      { label: "4"},
      { label: "5" },
    ]
  }]
}
chartOptions10 = {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "Site Traffic"
  },
  axisX:{
    valueFormatString: "DD MMM",
    crosshair: {
      enabled: true,
      snapToDataPoint: true
    }
  },
  axisY: {
    title: "Number of Visits",
    crosshair: {
      enabled: true
    }
  },
  toolTip:{
    shared:true
  },  
  legend:{
    cursor: "pointer",
    verticalAlign: "bottom",
    horizontalAlign: "right",
    dockInsidePlotArea: true,
    itemclick: function(e: any) {
      if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      } else{
        e.dataSeries.visible = true;
      }
      e.chart.render();
    }
  },
  data: [{
    type: "line",
    showInLegend: true,
    name: "Total Visit",
    lineDashType: "dash",
    markerType: "square",
    xValueFormatString: "DD MMM, YYYY",
    dataPoints: [
      { x: new Date(2022, 0, 3), y: 650 },
      { x: new Date(2022, 0, 4), y: 700 },
      { x: new Date(2022, 0, 5), y: 710 },
      { x: new Date(2022, 0, 6), y: 658 },
      { x: new Date(2022, 0, 7), y: 734 },
      { x: new Date(2022, 0, 8), y: 963 },
      { x: new Date(2022, 0, 9), y: 847 },
      { x: new Date(2022, 0, 10), y: 853 },
      { x: new Date(2022, 0, 11), y: 869 },
      { x: new Date(2022, 0, 12), y: 943 },
      { x: new Date(2022, 0, 13), y: 970 },
      { x: new Date(2022, 0, 14), y: 869 },
      { x: new Date(2022, 0, 15), y: 890 },
      { x: new Date(2022, 0, 16), y: 930 }
    ]
  }]



}
}