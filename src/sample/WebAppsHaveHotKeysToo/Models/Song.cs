using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebAppsHaveHotKeysToo.Models
{
	public class Song
	{
		public int Id { get; set; }
		[Required] public string Name { get; set; }
		
		[Required]
		[DataAnnotationsExtensions.Integer]
		[DataAnnotationsExtensions.Min(1)]
		[DataAnnotationsExtensions.Max(1000)]
		public int Duration { get; set; }

		static List<Song> fakeSongDB = new List<Song>();
		static Song()
		{
			fakeSongDB.Add(new Song {Id=1, Name="I Can't Drive 55", Duration = 143});
			fakeSongDB.Add(new Song {Id=1, Name="Holiday", Duration = 190});
			fakeSongDB.Add(new Song {Id=1, Name="Californication", Duration = 210});
		}

		public static List<Song> GetFakeData()
		{
			var list =
				(from s in fakeSongDB
				 orderby s.Id descending
				 select s).Take(5).ToList();

			return list;
		}

		public static void Insert(Song song)
		{
			fakeSongDB.Add(song);
			fakeSongDB.Sort((s1, s2) => s1.Name.CompareTo(s2.Name));
			song.Id = fakeSongDB.Count;
		}


	}
}