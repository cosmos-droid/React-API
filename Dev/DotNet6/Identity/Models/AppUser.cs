using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;



namespace Identity.Models
{
    public class AppUser : IdentityUser
    {
        public string? RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }


    }
}