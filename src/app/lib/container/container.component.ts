import { Component, Input, inject } from '@angular/core';
import { isInsideEditor } from '@dotcms/client';
import { DotcmsContextService } from '../../services/dotcms-context.service';
import { getContainersData } from '../../../utils/editor.utils';
import { NoComponentComponent } from '../../components/no-component/no-component.component';
import { COMPONENTS } from '../../../utils/components';
import { CommonModule, NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [NgComponentOutlet, CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {
  @Input({ required: true }) container!: any;

  private readonly dotcmsContext = inject(DotcmsContextService);

  isInsideEditor = this.dotcmsContext.getContextData.isInsideEditor;
  containerData!: any;
  containerStyles!: any;

  containerChildren!: any[];
  contentlets!: any[];

  stringifyContainer!:string;

  COMPONENTS = COMPONENTS;
  NoComponent = NoComponentComponent;

  ngOnInit() {
    this.stringifyContainer = JSON.stringify(this.container);
    const { identifier, uuid } = this.container;

    const { acceptTypes, contentlets, maxContentlets, variantId, path } =
      getContainersData(
        this.dotcmsContext.getContextData.page.entity.containers,
        this.container,
      );

      this.contentlets = contentlets;

    this.containerData = {
      acceptTypes,
      identifier: path ?? identifier,
      maxContentlets,
      variantId,
      uuid,
    };

    this.containerStyles = contentlets.length
      ? undefined
      : {
          width: '100%',
          backgroundColor: '#ECF0FD',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#030E32',
          height: '10rem',
        };

    // this.containerChildren = contentlets.map((contentlet: any) => {
    //   const Component = COMPONENTS[contentlet.contentType] || NoComponentComponent;

    //   return isInsideEditor 
    // })
  }
}
