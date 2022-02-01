using FitMan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.DTOs
{
    public class GymDTO
    {
        public long GymId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public long? OwnerId { get; set; }
        public Owner GymOwner { get; set; }
        public List<Course> Courses { get; set; }
        public List<Review> Reviews { get; set; }
    }
}
