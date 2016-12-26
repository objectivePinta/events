export const EventFormObject = {
  object: {
    name: {type: 'text', minSize:5, allowNumbers:false},
    address: {type: 'text', minSize:20, allowNumbers:true},
    description: {type: 'text', minSize:20, allowNumbers:true},
    date: {type: 'date', minSize:0, allowNumbers:true}
  },
  title: "Add new event"
};
