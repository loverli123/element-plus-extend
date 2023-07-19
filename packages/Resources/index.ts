const jsonFiles : any = import.meta.glob('./holidays/*.json', {eager: true});

let offs: string[] = [] 
let ons: string[] = [] 

const con = () => {
  for (const item in jsonFiles) {
    for(const key in jsonFiles[item].days) {
      let day: any = jsonFiles[item].days[key]
      if(day.isOffDay){
        offs.push(day.date)
      }
      else{
        ons.push(day.date)
      }
    }
  }
  return {
    offDays: offs,
    onDays: ons
  }
};

con();

// 注册
export const offDays = offs
export const onDays = ons