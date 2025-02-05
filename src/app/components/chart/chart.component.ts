import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ Chart,registerables }from 'chart.js'
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit,OnChanges{
  ngOnInit(): void {
   // this.renderChart()
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.renderChart()
  }
  labelList: string[] = [];
  colorList: string[] = [];
  valueList: number[] = [];
  dataForm: FormGroup;
  showChart:boolean=false;
  chartType:any='';

  constructor(private fb: FormBuilder) { 
    this.dataForm = this.fb.group({ label: [''], color: [''], value: [''] }); }
  addData() {
    const { label, color, value } = this.dataForm.value;
    this.labelList.push(label);
    this.colorList.push(color);
    this.valueList.push(parseInt(value));
    this.dataForm.reset(); // Clear the form fields after adding data }

  }
  showChartFun(){ 
    this.showChart=true;
    setTimeout(()=>{
      this.renderChart();
    },5000)
    
  }
  renderChart(){
    const myChart=new Chart('pieChart',
      {
        //type:'polarArea',
        type:this.chartType,
        data:{
          //labels:['apple','smasung','HTC','Lava'],
          labels:this.labelList,
          datasets:[{
            //data:[12,14,33,22],
            data:this.valueList,
           //backgroundColor:['blue','green','yellow','red']
            backgroundColor:this.colorList
          }],
        

        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Bar Chart'
            }
          }
        },

    })
  }
}