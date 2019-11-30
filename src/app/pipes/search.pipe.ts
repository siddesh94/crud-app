import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(pipeData, pipeFiltering): any {
      return pipeData.filter(item => {
        const name = item.name.toLowerCase();
        const designation = item.designation.toLowerCase();
        const salary = item.salary.toLowerCase();
        if (pipeFiltering) {
          const filterData = pipeFiltering.toLowerCase();
          return (
            name.includes(filterData) ||
            designation.includes(filterData) ||
            salary.includes(filterData)
          );
        }
      });
    }
}



