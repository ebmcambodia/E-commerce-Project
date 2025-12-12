import { Inject, Pipe, PipeTransform } from '@angular/core';
import { BASE_IMAGE_API } from 'src/app/core/token/baseUrl.token';

@Pipe({
  name: 'renderimg'
})
export class RenderimgPipe implements PipeTransform {
  constructor(@Inject(BASE_IMAGE_API) public imageUrl: string) {}
  transform(value: any, ...args: unknown[]): unknown {
    if (typeof value !== 'string') {
      return value;
    }
      return this.imageUrl+ value;
  }

}
