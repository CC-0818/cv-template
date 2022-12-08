export const person = {
  base: {
    name: 'ikun',
    gender: '男', // 男|女
    jobIntension: '偶像',
    detailList: [ //max length <= 6
      { id: 1, label: "xx", value: "xx" },
    ]
  },
  selfEvaluation: "热爱唱、跳、rap、篮球",
  educations: [
    {
      id: 1,
      school: 'xx',
      url: 'xxx',
      period: 'xxxx - xxxx',
    },
  ],
  skills: { // <span class="accent">xxx</span> 进行强调修饰
    main: [
      { id: 1, info: '精通 <span class="accent">ctrl</span>' },
    ],
    extra: [
      //{ id: 1, info: '' },
    ],
  },
  workExperience: [
    { id: 1, company: 'xxx', period: 'xxxx - xxxx'}
  ],
  projects: [
    { 
      id: 0, 
      name: 'xxxx',
      skills: 'xx/xx/xx/xx',
      period: 'xxxx - xxxx',
      url: '#',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx...'
    }
  ]
};


