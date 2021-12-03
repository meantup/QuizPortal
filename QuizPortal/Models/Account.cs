using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizPortal.Models
{
    public class Account
    {
        public string email { get; set; }
        public string password { get; set; }
    }
    public class AccountRegistration
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public string section { get; set; }
        public string email { get; set; }
        public string password { get; set; }
    }
}
