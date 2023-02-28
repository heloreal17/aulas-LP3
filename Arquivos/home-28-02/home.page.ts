import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  radioSelecionada:string='';
  mensagem:string='';

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

  verificarRadio() {
    if(this.radioSelecionada==='option1'){
      this.mensagem='Você escolheu a opção 1'
    }
    if(this.radioSelecionada==='option2'){
      this.mensagem='Você escolheu a opção 2'
    }
    if(this.radioSelecionada==='option3'){
      this.mensagem='Você escolheu a opção 3'
    }
    this.exibirToast();
    this.exibirAlerta();
  }

  async exibirToast() { /*async não depende da finalização de outra ação, alertas são asincronos*/
    const toast = await this.toastController.create({
      message: this.mensagem,
      duration: 2000,
      color:"warning"
    });
    toast.present();
  }

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Esta é uma mensagem de exemplo.',
      message: this.radioSelecionada,
      buttons: ['OK']
    });
    alert.present();
  }

}

