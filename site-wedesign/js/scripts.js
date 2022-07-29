
// Mobile Menu

document.getElementById('hamburguer-icon').onclick = function(){
  document.getElementById('sliding-header-menu-outer').style.right = '0'
}

document.getElementById('sliding-header-menu-close-button').onclick = function(){
  document.getElementById('sliding-header-menu-outer').style.right = '-320px'
}

// About us Tab

var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

aboutUsTabs = document.getElementsByClassName('single-tab')

// for each of the elements in the aboutUsTabs set an onclick event
for(var a=0;a<aboutUsTabs.length;a++){
  aboutUsTabs[a].onclick = function(){
    // grab currently selected item ; e.g. Mission,Vision,Values
    var currentSelected = this.innerHTML
    // set text accordingly
    document.getElementById("box-text").innerHTML = aboutUs[currentSelected]
    // iterate over aboutUsTabs and set the colors accordingly
    for(var b=0;b<aboutUsTabs.length;b++){
      
      // // way1
      // if(aboutUsTabs[b].innerHTML===currentSelected){
      //   aboutUsTabs[b].style.backgroundColor = seletectedColor
      //   aboutUsTabs[b].style.fontWeight = 'bold'
      // } else {
      //   aboutUsTabs[b].style.backgroundColor = unseletectedColor
      //   aboutUsTabs[b].style.fontWeight = 'normal'
      // }
      
      // way2
      aboutUsTabs[b].style.backgroundColor = unseletectedColor
      aboutUsTabs[b].style.fontWeight = 'normal'
    }
    this.style.backgroundColor = seletectedColor
    this.style.fontWeight = 'bold'

  }
}


// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

var serviceNext = document.getElementById('service-next')
var servicePrevious = document.getElementById('service-previous')
var serviceTitle = document.getElementById('service-title') 
var serviceText = document.getElementById('service-text')
var serviceIdx = 0

serviceNext.onclick = function() {
  if(serviceIdx==(ourServices.length-1)){
    serviceIdx = 0
  } else {
    serviceIdx += 1
  }
  serviceTitle.innerHTML = ourServices[serviceIdx]['title']
  serviceText.innerHTML = ourServices[serviceIdx]['text']
}

servicePrevious.onclick = function() {
  if(serviceIdx==0){
    serviceIdx = (ourServices.length-1)
  } else {
    serviceIdx -= 1
  }
  serviceTitle.innerHTML = ourServices[serviceIdx]['title']
  serviceText.innerHTML = ourServices[serviceIdx]['text']
}

// Footer
