

const BarChart = ({ value,highlighted }:{value:number,highlighted:{
  current:boolean,
  next:boolean
}}) => {
  return (

         <div
          className={` text-white ${highlighted.current ? 'bg-red-500' : highlighted.next?'bg-green-500': 'bg-blue-500'}`}
          style={{
            width: '20px', // fixed width for all bars
            height: `${(value)}px`, // height relative to the max value
          }}
          title={`Value: ${value}`}
        />
  );
};

export default BarChart;
