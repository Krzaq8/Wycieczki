import database from "./getDatabase.mjs";

const trips = [
  {
    img_url: "../assets/gory.jpg",
    img_alt: "Góry", 
    head: "Szczyt wszystkiego", 
    short_desc: "Krótka wycieczka z wejściem na Szczyt wszystkiego.", 
    long_desc: "To jest opis wycieczki w góry. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
      Pellentesque a molestie diam. Etiam sit amet felis sit amet ipsum egestas maximus eu vel purus. \
      Etiam in finibus justo. Fusce a dignissim enim, non interdum nulla. Proin tempus ligula at justo gravida sodales. \
      In eget fringilla felis. Aliquam non libero sit amet urna ultricies ullamcorper vel sit amet nulla.\
      In eleifend dapibus neque, vitae ultricies massa finibus eu.\
      Integer vitae tortor a orci pharetra rutrum. Aliquam erat volutpat. Integer vehicula ac nibh vel accumsan.\
      Nam efficitur, metus viverra mattis hendrerit, dui ex congue lectus, quis vehicula nulla velit et justo. \
      Proin vel odio venenatis, lacinia mi in, porttitor neque. Duis varius erat dolor, at congue erat luctus id.\
      Donec hendrerit vel ex at commodo. Suspendisse sit amet sapien fringilla, iaculis orci ac, iaculis lacus. \
      Pellentesque eu mi tristique, pretium turpis id, ullamcorper nulla. Morbi ornare est sit amet sem convallis \
      malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam \
      convallis luctus lorem, aliquet lobortis nisl. Maecenas sit amet arcu eget ex ullamcorper finibus eu sit\
      amet ipsum. Phasellus fringilla quam non mauris luctus, ut viverra velit elementum.",
		beg_date: '10.12.2023GMT',
    end_date: '10.25.2023GMT',
    price: 1234,
		tickets_left: 20
  },
  {
    img_url: "../assets/morze.jpg", 
    img_alt: "Morze", 
    head: "Dalekie morza", 
    short_desc: "Dłuższy opis wycieczki. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lorem nisl, pellentesque in augue eget, elementum vulputate mauris. Maecenas ut porttitor risus. In tempus tellus in mattis cursus.", 
    long_desc: "To jest opis wycieczki nad morze. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
      Pellentesque a molestie diam. Etiam sit amet felis sit amet ipsum egestas maximus eu vel purus. \
      Etiam in finibus justo. Fusce a dignissim enim, non interdum nulla. Proin tempus ligula at justo gravida sodales. \
      In eget fringilla felis. Aliquam non libero sit amet urna ultricies ullamcorper vel sit amet nulla.\
      In eleifend dapibus neque, vitae ultricies massa finibus eu.\
      Integer vitae tortor a orci pharetra rutrum. Aliquam erat volutpat. Integer vehicula ac nibh vel accumsan.\
      Nam efficitur, metus viverra mattis hendrerit, dui ex congue lectus, quis vehicula nulla velit et justo. \
      Proin vel odio venenatis, lacinia mi in, porttitor neque. Duis varius erat dolor, at congue erat luctus id.\
      Donec hendrerit vel ex at commodo. Suspendisse sit amet sapien fringilla, iaculis orci ac, iaculis lacus. \
      Pellentesque eu mi tristique, pretium turpis id, ullamcorper nulla. Morbi ornare est sit amet sem convallis \
      malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam \
      convallis luctus lorem, aliquet lobortis nisl. Maecenas sit amet arcu eget ex ullamcorper finibus eu sit\
      amet ipsum. Phasellus fringilla quam non mauris luctus, ut viverra velit elementum.",
		beg_date: '07.14.2023GMT',
		end_date: '07.24.2023GMT',
		price: 2347,
		tickets_left: 13
  },
  {
    img_url: "../assets/miasto.webp", 
    img_alt: "Miasto", 
    head: "Miasto", 
    short_desc: "Mamy na świecie miasta, które warto zwiedzać.", 
    long_desc: "To jest opis wycieczki do miasta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
      Pellentesque a molestie diam. Etiam sit amet felis sit amet ipsum egestas maximus eu vel purus. \
      Etiam in finibus justo. Fusce a dignissim enim, non interdum nulla. Proin tempus ligula at justo gravida sodales. \
      In eget fringilla felis. Aliquam non libero sit amet urna ultricies ullamcorper vel sit amet nulla.\
      In eleifend dapibus neque, vitae ultricies massa finibus eu.\
      Integer vitae tortor a orci pharetra rutrum. Aliquam erat volutpat. Integer vehicula ac nibh vel accumsan.\
      Nam efficitur, metus viverra mattis hendrerit, dui ex congue lectus, quis vehicula nulla velit et justo. \
      Proin vel odio venenatis, lacinia mi in, porttitor neque. Duis varius erat dolor, at congue erat luctus id.\
      Donec hendrerit vel ex at commodo. Suspendisse sit amet sapien fringilla, iaculis orci ac, iaculis lacus. \
      Pellentesque eu mi tristique, pretium turpis id, ullamcorper nulla. Morbi ornare est sit amet sem convallis \
      malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam \
      convallis luctus lorem, aliquet lobortis nisl. Maecenas sit amet arcu eget ex ullamcorper finibus eu sit\
      amet ipsum. Phasellus fringilla quam non mauris luctus, ut viverra velit elementum.",
		beg_date: '05.02.2023GMT',
		end_date: '05.08.2023GMT',
    price: 7888,
		tickets_left: 45
  },
	{
    img_url: "../assets/miasto.webp", 
    img_alt: "Miasto", 
    head: "Stare miasto", 
    short_desc: "Mamy na świecie miasta, które warto zwiedzać.", 
    long_desc: "To jest opis wycieczki do miasta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
      Pellentesque a molestie diam. Etiam sit amet felis sit amet ipsum egestas maximus eu vel purus. \
      Etiam in finibus justo. Fusce a dignissim enim, non interdum nulla. Proin tempus ligula at justo gravida sodales. \
      In eget fringilla felis. Aliquam non libero sit amet urna ultricies ullamcorper vel sit amet nulla.\
      In eleifend dapibus neque, vitae ultricies massa finibus eu.\
      Integer vitae tortor a orci pharetra rutrum. Aliquam erat volutpat. Integer vehicula ac nibh vel accumsan.\
      Nam efficitur, metus viverra mattis hendrerit, dui ex congue lectus, quis vehicula nulla velit et justo. \
      Proin vel odio venenatis, lacinia mi in, porttitor neque. Duis varius erat dolor, at congue erat luctus id.\
      Donec hendrerit vel ex at commodo. Suspendisse sit amet sapien fringilla, iaculis orci ac, iaculis lacus. \
      Pellentesque eu mi tristique, pretium turpis id, ullamcorper nulla. Morbi ornare est sit amet sem convallis \
      malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam \
      convallis luctus lorem, aliquet lobortis nisl. Maecenas sit amet arcu eget ex ullamcorper finibus eu sit\
      amet ipsum. Phasellus fringilla quam non mauris luctus, ut viverra velit elementum.",
		beg_date: '05.02.2022GMT',
		end_date: '05.08.2022GMT',
    price: 1888,
		tickets_left: 2
  }
];

const users = [
	{
		name: 'Jan',
		last_name: 'Kowalski',
		email: 'mail@mail.com',
		password: '$2b$05$4eV/fFy2EcTou1PnKVOcJe1iUdLp6bJsEW4PJGaXWo4zbbWGXy1Zi'
	}
];

await database.Trip.sync({ force: true });
await database.User.sync({ force: true });
await database.Reservation.sync({ force: true });
await database.sequelize.sync({ force: true });

trips.forEach(async (trip) => await database.Trip.create(trip));
users.forEach(async (user) => await database.User.create(user));
