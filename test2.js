var ctx = document.getElementById('colorWheel').getContext('2d');
var chart = new Chart(ctx, {
  
  type: 'doughnut', 
  
  data: {
    labels: ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#" ],
    datasets: [
      {
        backgroundColor: [ 'rgb(255, 255, 0)',
                           'rgb(255, 132, 0)',
                           'rgb(255, 0, 0)',
                           'rgb(247, 0, 64)',
                           'rgb(239, 2, 126)',
                           'rgb(131, 1, 126)',
                           'rgb(19, 0, 123)',                                 
                           'rgb(10, 82, 165)',
                           'rgb(0, 159, 197)',                                   
                           'rgb(0, 147, 126)',
                           'rgb(0, 140, 57)', 
                           'rgb(130, 198, 28)'
                          ],
        borderWidth: 5,
        data: [1,1,1,1,1,1,1,1,1,1,1,1],
        
       }, 
    ]
  },
  
  options: {
    cutoutPercentage: 50,
    legend: {display: false,},
    tooltips: {enabled: false,},
  }  

}); 


