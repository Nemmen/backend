import express from "express";
import cors from 'cors'

const server = express();
server.use(cors());
// ssl is not in localhost do we need cors 
const props = [
  {
    id: '1',
    image: "https://images.bewakoof.com/t640/men-s-black-straw-hat-crew-graphic-printed-oversized-t-shirt-630819-1708598320-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "black",
    size: "S",
  },
  {
    id: '2',
    image: "https://images.bewakoof.com/t640/men-s-black-one-piece-graphic-printed-oversized-t-shirt-630630-1709105339-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black One Piece Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "black",
    size: "S",
  },
  {
    id: '3',
    image: "https://images.bewakoof.com/t640/men-s-black-foodie-deadpool-graphic-printed-oversized-acid-wash-t-shirt-633533-1708600144-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Foodie Deadpool Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "black",
    size: "M",
  },
  {
    id: '4',
    image: "https://images.bewakoof.com/t640/men-s-brown-straw-hat-crew-graphic-printed-oversized-t-shirt-630812-1709105472-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Brown Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "brown",
    size: "M",
  },
  {
    id: '5',
    image: "https://images.bewakoof.com/t640/men-s-black-mugiwara-crew-graphic-printed-oversized-t-shirt-630813-1709116981-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Mugiwara Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "black",
  },
  {
    id: '6',
    image: "https://images.bewakoof.com/t640/men-s-black-luffy-graphic-printed-oversized-t-shirt-630650-1709105021-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Luffy Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "black",
  },
  {
    id: '7',
    image: "https://images.bewakoof.com/t640/men-s-blue-going-merry-graphic-printed-oversized-t-shirt-630627-1709104777-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Blue Going Merry Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "blue",
  },
  {
    id: '8',
    image: "https://images.bewakoof.com/t640/men-printed-co-ord-set-7-619985-1709805508-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Printed Co-ord Set",
    price: "₹799",
    type: "100% Cotton",
    color: "blue",
    size: "S",
  },
  {
    id: '9',
    image: "https://images.bewakoof.com/t640/men-s-blue-luffy-graphic-printed-oversized-t-shirt-630647-1709105295-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Blue Luffy Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "blue",
  },
  {
    id: '10',
    image: "https://images.bewakoof.com/t640/men-s-blue-boxer-628776-1707977242-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Blue Boxer",
    price: "₹799",
    type: "100% Cotton",
    color: "blue",
    size: "S",
  },
  {
    id: '11',
    image: "https://images.bewakoof.com/t640/men-s-navy-blue-relaxe-fit-cargo-pant-585697-1696326535-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Navy Blue Relax Fit Cargo Pant",
    price: "₹799",
    type: "100% Cotton",
    color: "blue",
  },
  {
    id: '12',
    image: "https://images.bewakoof.com/t640/men-solid-pyjamas-4-620062-1707200620-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Solid Pyjamas",
    price: "₹799",
    type: "100% Cotton",
    color: "blue",
  },
  {
    id: '13',
    image: "https://images.bewakoof.com/t640/men-s-red-kung-fu-panda-graphic-printed-t-shirt-630761-1706686451-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Red Kung Fu Panda Graphic Printed T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "red",
    size: "M",
  },
  {
    id: '14',
    image: "https://images.bewakoof.com/t640/men-s-red-weapon-xi-graphic-printed-t-shirt-630777-1706686786-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Red Weapon XI Graphic Printed T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "red",
  },
  {
    id:'15',
    image:
      "https://images.bewakoof.com/t640/men-s-red-weapon-xi-graphic-printed-oversized-t-shirt-604873-1690372836-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "red",
    size: "S",
  },
  {
    id:'16',
    image:
      "https://images.bewakoof.com/t640/men-s-red-moon-rider-graphic-printed-oversized-t-shirt-502017-1701423884-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "red",
    size: "S",
  },
]

server.get("/", (req, res) => {
  res.send(props)
});

server.listen( 9000 , ()=>{
    console.log("helooo")
})