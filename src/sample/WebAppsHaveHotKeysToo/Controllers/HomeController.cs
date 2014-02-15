using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebAppsHaveHotKeysToo.Models;

namespace WebAppsHaveHotKeysToo.Controllers
{
	public class HomeController : Controller
	{
		[HttpGet]
		public ActionResult Index()
		{
			var songs = Song.GetFakeData();
			return View(songs);
		}

		[HttpPost]
		public ActionResult Index(Song song)
		{
			if (!ModelState.IsValid)
			{
				var songs = Song.GetFakeData();
				return View(songs);
			}

			Song.Insert(song);
			return Redirect("~/");
		}

		public ActionResult About()
		{
			return View();
		}

		public ActionResult Contact()
		{
			return View();
		}
	}
}
