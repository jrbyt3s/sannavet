//Default Select

export const defaultselect = [
    {id:1, label:"Open this select menu"},
    {id:2, label:"1"},
    {id:3, label:"2"},
    {id:4, label:"3"},
]

//Basic Tom Select

export const Basicselect = [
    { value:"Select a person..."},
    { value:"Thomas Edison"},
    {value:"Nikola"},
    {value:"Nikola Tesla"},
    {value:"Arnold Schwarzenegger"},
]

//Multiple dropdown select

export const multiDropdownSelect = [
    { value: "Alabama", label: "Alabama" },
    { value: "Alaska", label: "Alaska" },
    { value: "Arizona", label: "Arizona" },
    { value: "Arkansas", label: "Arkansas" },
    { value: "California", label: "California" },
    { value: "Colorado", label: "Colorado" },
    { value: "Connecticut", label: "Connecticut" },
    { value: "Delaware", label: "Delaware" },
    { value: "District of Columbia", label: "District of Columbia" },
    { value: "Florida", label: "Florida" },
    { value: "Georgia", label: "Georgia" },
    { value: "Hawaii", label: "Hawaii" },
    { value: "Idaho", label: "Idaho" },
    { value: "Illinois", label: "Illinois" },
    { value: "Indiana", label: "Indiana" },
    { value: "Iowa", label: "Iowa" },
    { value: "Kansas", label: "Kansas" },
    { value: "Kentucky", label: "Kentucky" },
    { value: "Louisiana", label: "Louisiana" },
    { value: "Maine", label: "Maine" },
    { value: "Maryland", label: "Maryland" },
    { value: "Massachusetts", label: "Massachusetts" },
    { value: "Michigan", label: "Michigan" },
    { value: "Minnesota", label: "Minnesota" },
    { value: "Mississippi", label: "Mississippi" },
    { value: "Missouri", label: "Missouri" },
    { value: "Montana", label: "Montana" },
    { value: "Nebraska", label: "Nebraska" },
    { value: "Nevada", label: "Nevada" },
    { value: "New Hampshire", label: "New Hampshire" },
    { value: "New Jersey", label: "New Jersey" },
    { value: "New Mexico", label: "New Mexico" },
    { value: "New York", label: "New York" },
    { value: "North Carolina", label: "North Carolina" },
    { value: "North", label: "North" },
    { value: "Ohio", label: "Ohio" },
    { value: "Oklahoma", label: "Oklahoma" },
    { value: "Oregon", label: "Oregon" },
    { value: "Pennsylvania", label: "Pennsylvania" },
    { value: "Rhode Island", label: "Rhode Island" },
    { value: "South Carolina", label: "South Carolina" },
    { value: "South Dakota", label: "South Dakota" },
    { value: "Tennessee", label: "Tennessee" },
    { value: "Texas", label: "Texas" },
    { value: "Utah", label: "Utah" },
    { value: "Vermont", label: "Vermont" },
    { value: "Virginia", label: "Virginia" },
    { value: "Washington", label: "Washington" },
    { value: "West Virginia", label: "West Virginia" },
    { value: "Wisconsin", label: "Wisconsin" },
    { value: "Wyoming", label: "Montana" }
  ];


  //Option groups

  const Group1 = [
    { value: "London", label: "London" },
    { value: "Manchester", label: "Manchester" },
    { value: "Liverpool", label: "Liverpool" },
  ];
  const Group2 = [
    { value: "Paris", label: "Paris" },
    { value: "Lyon", label: "Lyon" },
    { value: "Marseille", label: "Marseille" },
  ];
  
  const Group3 = [
    { value: "Hamburg", label: "Hamburg" },
    { value: "Munich", label: "Munich" },
    { value: "Berlin", label: "Berlin" },
  ];
  const Group4 = [
    { value: "New York", label: "New York" },
    { value: "Washington", label: "Washington" },
    { value: "Michigan", label: "Michigan" },
  ];
  const disabledGroup = [
    { value: "New York", label: "New York" },
    { value: "Washington", label: "Washington", isDisabled: "isDisabled" },
    { value: "Michigan", label: "Michigan", isDisabled: "isDisabled" },
  ];
  const Group5 = [
    { value: "Madrid", label: "Madrid" },
    { value: "Barcelona", label: "Barcelona" },
    { value: "Malaga", label: "Malaga" },
  ];
  
  const Group6 = [
    { value: "Montreal", label: "Montreal" },
    { value: "Toronto", label: "Toronto" },
    { value: "Vancouver", label: "Vancouver" },
  ];
  export const DisabledGroupData = [
    {
      label: "UK",
      options: Group1
    },
    {
      label: "FR",
      options: Group2,
    },
    {
      label: "SP",
      options: Group3,
    },
    {
      label: "UK",
      options: disabledGroup,
    },
    {
      label: "US",
      options: Group5,
    },
    {
      label: "CA",
      options: Group6,
    },
  ];

  //Single Select

  export const singleselect = [
    {id:1, value:"This is a placeholder"},
    {id:2, value:"Choice 1"},
    {id:3, value:"Choice 2"},
    {id:4, value:"Choice 3"},
  ]

  export const Multipleselectdata=[
    {value:'Choice 1', label:'Choice 1'},
    {value:'Choice 2', label:'Choice 2'},
    {value:'Choice 3', label:'Choice 3'},
    {value:'Choice 4', label:'Choice 4'},
    {value:'Choice 5', label:'Choice 5'},
    {value:'Choice 6', label:'Choice 6'  , isDisabled: 'isDisabled'},
    ];
    export const Multipleselectdata1=[
      {value:'Choice 1', label:'Choice 1'},
      {value:'Choice 2', label:'Choice 2'},
      {value:'Choice 3', label:'Choice 3'},
      {value:'Choice 4', label:'Choice 4'}
      ];

      export const Zerodata=[
        {value:'Zero', label:'Zero'},
        ];