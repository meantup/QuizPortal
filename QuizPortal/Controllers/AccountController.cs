using Microsoft.AspNetCore.Mvc;
using QuizPortal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizPortal.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult AccountLogin()
        {
            return View();
        }
        public async Task<ActionResult> Index(Account account)
        {
            return View();
        }
    }
}
