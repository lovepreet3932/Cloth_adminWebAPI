using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks; // add libraries

namespace API_project.Business_Layer
{
    public class Clothes // class
    {
        [Key]
        public int Id{ get; set; }  // id primery key
        public string Brand { get; set; }  // brand 
        
        public string Name { get; set; }// brand name
        public string Size { get; set; } // size
        public int Price { get; set; }// price
        public int Quntity { get; set; }// quntity
    }
}
