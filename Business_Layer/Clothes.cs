using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_project.Business_Layer
{
    public class Clothes
    {
        [Key]
        public int Id{ get; set; }  // id
        public string Brand { get; set; }  // brand 
        
        public string Name { get; set; }// brand name
        public string Size { get; set; }
        public int Price { get; set; }
        public int Quntity { get; set; }
    }
}
