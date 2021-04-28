using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using API_project.Business_Layer;

namespace API_project.Data
{
    public class API_projectContext : DbContext
    {
        public API_projectContext (DbContextOptions<API_projectContext> options)
            : base(options)
        {
        }

        public DbSet<API_project.Business_Layer.Clothes> Clothes { get; set; }
    }
}
