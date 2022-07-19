using DemoApiApp.Models;

namespace DemoApiApp.Data
{
    public class EFShoeRepo : IShoeRepo
    {
        private readonly ShoeContext _context;

        public EFShoeRepo(ShoeContext context)
        {
            _context = context;
        }


        public Shoe GetShoeById(int id)
        {
            return _context.Shoes.FirstOrDefault(p => p.Id == id);
        }

        public IEnumerable<Shoe> GetShoes()
        {
            return _context.Shoes.ToList();
        }
    }
}