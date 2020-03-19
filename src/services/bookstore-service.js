export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 39.99,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 47.95,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'},
    {
      id: 3,
      title: 'Introduction to Algorithms, 3rd Edition (The MIT Press)',
      author: 'Thomas H. Cormen',
      price: 99,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41-1VkO%2B1lL._SX359_BO1,204,203,200_.jpg'},
    {
      id: 4,
      title: `You Don't Know Js: Up & Going`,
      author: 'Kyle Simpson',
      price: 5.47,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41WdbPkuINL._SX331_BO1,204,203,200_.jpg'},
    {
      id: 5,
      title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms, 3rd Edition',
      author: 'Donald E. Knuth',
      price: 49.99,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41eCbcQARTL._SX342_BO1,204,203,200_.jpg'},  
    {
      id: 6,
      title: 'Structure and Interpretation of Computer Programs - 2nd Edition',
      author: 'Harold Abelson',
      price: 55,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51H17R%2BbW8L._SX331_BO1,204,203,200_.jpg'}, 
    {  
      id: 7,
      title: 'The C++ Programming Language, 4th Edition',
      author: 'Bjarne Stroustrup',
      price: 38.97,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51Z-XJXiQnL._SX396_BO1,204,203,200_.jpg'},
    {        
      id: 8,
      title: 'Learning React',
      author: 'Kirupa Chinnathambi',
      price: 39.99,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/514iO0Is6hL._SX388_BO1,204,203,200_.jpg'},
    {
      id: 9,
      title: 'Code Complete: A Practical Handbook of Software Construction, Second Edition',
      author: ' Steve McConnell',
      price: 28.99,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/514Fchkr9WL._SX408_BO1,204,203,200_.jpg'},
    {      
      id: 10,
      title: 'Pro React 16',
      author: 'Adam Freeman',
      price: 49.99,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41TExmQj2VL._SX348_BO1,204,203,200_.jpg'},
    {           
      id: 11,
      title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      author: 'Robert C. Martin',
      price: 49.99,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG%2BL._SX374_BO1,204,203,200_.jpg'},
    { 
      id: 12,
      title: 'HTML and CSS: Design and Build Websites',
      author: 'Jon Duckett',
      price: 15.95,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/31aX81I6vnL._SX351_BO1,204,203,200_.jpg'}
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }
}