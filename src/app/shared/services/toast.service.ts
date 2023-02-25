import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { ToastComponent } from '../components/toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) { }

   /**
    * Show Toats natification
    * @param type (success, warning, danger, info)
    * @param title 
    * @param message 
    * @param time 
    */
   public showToast = (type: string, title: string, message:string, time: number): void => {
    const toastFactory = this.componentFactoryResolver.resolveComponentFactory(ToastComponent);
    const toastRef = toastFactory.create(this.injector);
    this.appRef.attachView(toastRef.hostView);
    document.body.appendChild(toastRef.location.nativeElement);

    toastRef.instance.type = type;
    toastRef.instance.title = title;
    toastRef.instance.message = message;
    toastRef.instance.time = time;

    toastRef.instance.showToast();

    toastRef.instance.showSubject.subscribe(
      (show: boolean) => {
        if (!show)
          toastRef.destroy();
      }
    )

   }
}
