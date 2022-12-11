export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name:"name",
      type:"string",
      title:"Restaurant name",
      validation: (Rule) => Rule.required(),
    },
    {
      name:"short_description",
      type:"string",
      title:"Short Description",
      validation:(Rule)=>Rule.required(),
    },
    {
      name:"image",
      type:"image",
      title:"Image of the Restaurant",
    },
    {
      name:"lat",
      type:"number",
      title:"Latitude of Restaurant",
    },
    {
      name:"long",
      type:"number",
      title:"Longitude of Restaurant",
    },
    {
      name:"address",
      type:"string",
      title:"Restaurant address",
      validation:(Rule)=>Rule.required(),
    },
    {
      name:"rating",
      type:'number',
      title:"Enter a Rating from (1-5 stars)",
      validation:(Rule)=>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 to 5")
    },
    {
      name:"type",
      type:"string",
      title:"Category",
      validation:(Rule)=>Rule.required(),
      type:"reference",
      to:[{type:"category"}]
    },
    {
      name:"dishes",
      type:"array",
      title:"Dishes",
      of:[{type:'reference', to:[{type:"dish"}]}],
    },
  ],
}
