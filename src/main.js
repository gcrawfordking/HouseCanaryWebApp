import Vue from 'vue'
import Handlers from './handlers.js'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
 
var address1 =  '43 Valmonte Plaza';
var zipcode1 = '90274';
var pic1 = 'https://u.realgeeks.media/greenvillerehub/218_q_deck_front2.jpg';

var address2 =  '10216 N Willow Ave';
var zipcode2 = '64157';
var pic2 = 'https://images.pexels.com/photos/462358/pexels-photo-462358.jpeg?cs=srgb&dl=garden-house-lawn-462358.jpg&fm=jpg';

var address3 =  '34813 SE Burrows Way';
var zipcode3 = '98065';
var pic3 = 'https://circaoldhouses.com/wp-content/uploads/2017/10/key-hole-house-1.jpg';

Vue.use(Vuetify)

Vue.component('list_items', {


}



  )

new Vue({
  el: '#app',
  template: '<div>hello world</div>',
  data: {
  	show: false,
  	disp_city: "",
  	disp_state: "",
  	disp_address: "",
  	disp_zipcode: "",
  	mainpic:"",
  	price: "",
  	bedrooms: "test",
  	bathrooms: "test",
  	acres: "test",
  	yearBuilt: "0000",
        items: [
          { header: 'Saved this week' },
          {
            pic: pic1,
            address: address1,
            zipcode: zipcode1,
            zipStr: "Zipcode: " + zipcode1
          },
          { divider: true, inset: true },
          {
            pic: pic2,
            address: address2,
            zipcode: zipcode2,
			zipStr: "Zipcode: " + zipcode2
          },
          { divider: true, inset: true },
          {
            pic: pic3,
            address: address3,
            zipcode: zipcode3,
            zipStr: "Zipcode: " + zipcode3
          }
        ]
  },

  methods: {
  	getData: function(addr,zip, pic)
  	{
  			this.fetchValueData(addr, zip, pic);
  			this.fetchPropertyData(addr, zip);
  	},

  	fetchValueData: function(addr, zip, pic) {
	  	Handlers.handler2(addr, zip, "property/value")
	  		.then((replyObj) => {
	  		  	console.log(replyObj);
	  		  	this.disp_city = replyObj.data[0].address_info.city;
	  		  	this.disp_state = replyObj.data[0].address_info.state;
	  		  	this.price = replyObj.data[0]["property/value"].result.value.price_mean;
            this.mainpic = pic;
            this.disp_address =  addr;
            this.disp_zipcode = zip;
	  		})
  },

    fetchPropertyData: function(addr, zip) {
	  	Handlers.handler2(addr, zip, "property/details")
	  		.then((replyObj) => {
	  			debugger;
	  		  	console.log(replyObj);
			  	this.bedrooms = replyObj.data[0]["property/details"].result.property.number_of_bedrooms;
			  	this.bathrooms = replyObj.data[0]["property/details"].result.property.total_bath_count;
			  	this.acres = replyObj.data[0]["property/details"].result.property.site_area_acres;
			  	this.yearBuilt = replyObj.data[0]["property/details"].result.property.year_built;
	  		})
  }

},

	mounted: function () {
		this.getData(address1, zipcode1, pic1);
	}


})


