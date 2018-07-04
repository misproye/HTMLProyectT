$(function(){

    var dataSource = new kendo.data.DataSource({

      items: [

            {

              "Id":"878637-010",

              "Name":"ZOOM KD 9 ELITE HYPER ORANGE",

              "Category": "Basketball",

              "Stock":15,

              "Price":2899.00

            },

          {

            "Id":"852405-004",

            "Name":"LEBRON XIV",

            "Category": "Basketball",

            "Stock":1,

            "Price":3699.00

          },

          {

            "Id":"881465-120",

            "Name":"JORDAN FORMULA 23",

            "Category": "Basketball",

            "Stock":5,

            "Price":2399.00

          },

          {

            "Id":"852422-601",

            "Name":"ZOOM REV 2017",

            "Category": "Basketball",

            "Stock":0,

            "Price":1999.00

          },

          {

            "Id":"852473-600",

            "Name":"MAMBA INSTINCT",

            "Category": "Basketball",

            "Stock":0,

            "Price":1799.00

            },

          {

            "Id":"917391-010",

            "Name":"PLAYERA DRY KD",

            "Category": "Shirts",

            "Stock":20,

            "Price":549

          },

          {

            "Id":"843130-477",

            "Name":"PLAYERA AIR JORDAN 23",

            "Category": "Shirts",

            "Stock":40,

            "Price":549.00

          },

          {

            "Id":"831348-100",

            "Name":"SHORT ULTIMATE FLIGHT",

            "Category": "Shorts",

            "Stock":10,

            "Price":899.00

          },

          {

              "Id":"836277-457",

              "Name":"SHORT FT GX FRANCHISE",

              "Category": "Shorts",

              "Stock":10,

              "Price":849

          },

          {

          "Id":"1281295-002",

          "Name":"SHORT SC30 TOP GUN",

          "Category": "Shorts",

          "Stock":5,

          "Price":799

          }



      ]

    });



    $("#listview").kendoListView({
        dataSource: dataSource,

        plegable:true,

        template: kendo.template($("#template").html())

    });

});    




/*var items = [

            {

              "Id":"878637-010",

              "Name":"ZOOM KD 9 ELITE HYPER ORANGE",

              "Category": "Basketball",

              "Stock":15,

              "Price":2899.00

            },

          {

            "Id":"852405-004",

            "Name":"LEBRON XIV",

            "Category": "Basketball",

            "Stock":1,

            "Price":3699.00

          },

          {

            "Id":"881465-120",

            "Name":"JORDAN FORMULA 23",

            "Category": "Basketball",

            "Stock":5,

            "Price":2399.00

          },

          {

            "Id":"852422-601",

            "Name":"ZOOM REV 2017",

            "Category": "Basketball",

            "Stock":0,

            "Price":1999.00

          },

          {

            "Id":"852473-600",

            "Name":"MAMBA INSTINCT",

            "Category": "Basketball",

            "Stock":0,

            "Price":1799.00

            },

          {

            "Id":"917391-010",

            "Name":"PLAYERA DRY KD",

            "Category": "Shirts",

            "Stock":20,

            "Price":549

          },

          {

            "Id":"843130-477",

            "Name":"PLAYERA AIR JORDAN 23",

            "Category": "Shirts",

            "Stock":40,

            "Price":549.00

          },

          {

            "Id":"831348-100",

            "Name":"SHORT ULTIMATE FLIGHT",

            "Category": "Shorts",

            "Stock":10,

            "Price":899.00

          },

          {

              "Id":"836277-457",

              "Name":"SHORT FT GX FRANCHISE",

              "Category": "Shorts",

              "Stock":10,

              "Price":849

          },

          {

          "Id":"1281295-002",

          "Name":"SHORT SC30 TOP GUN",

          "Category": "Shorts",

          "Stock":5,

          "Price":799

          }

      ];*/
