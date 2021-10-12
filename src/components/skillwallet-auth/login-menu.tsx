import { Component, h, Event, EventEmitter, State, Prop } from '@stencil/core';
import Portis from '@portis/web3';
import { changeNetwork, fetchSkillWallet } from '../../utils/utils';
import { ethers } from 'ethers';

@Component({
  tag: 'login-menu',
})
export class LoginMenu {
  @State() isLoading: Boolean = false;
  @Prop() isPartner: Boolean;
  @Prop({mutable: true}) web3Provider: any;
  @State() buttonClass: string = 'disabled';
  
  @Event({
    eventName: 'showNewScreen',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  showNewScreen: EventEmitter<any>;

  @Event({
    eventName: 'closeModalOnLogin',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  closeModalOnLogin: EventEmitter<any>;

  handleNewScreen(text) {
    this.showNewScreen.emit(text);
  }

  handleMetamaskClick = async () => {
    this.isLoading = true;
    const { ethereum } = window;
    try {
      await changeNetwork();
      await ethereum.request({ method: 'eth_requestAccounts' });
      this.web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      await fetchSkillWallet(this.web3Provider, ethereum.selectedAddress);
      this.closeModalOnLogin.emit(); 

    } catch (error) {
      this.isLoading = false;
      alert(error);
    }
  };

  handlePortisClick = async () => {
    this.isLoading = true;
    try {
      const portis = new Portis('b86287a9-e792-4722-9487-477419f4470f', {
        nodeUrl: 'https://matic-mumbai.chainstacklabs.com/',
        chainId: '80001',
      });
      this.web3Provider = new ethers.providers.Web3Provider(portis.provider);
      const addresses = await this.web3Provider.listAccounts();
      await fetchSkillWallet(this.web3Provider, addresses[0]);
      this.closeModalOnLogin.emit(); 
    } catch (error) {
      alert(error);
    }
    this.isLoading = false;
  }

  render() {
    return (
        <div class="modal-window-child">
          {this.isLoading ? <div class="item">
              <h2>Loading</h2>  
              <i class="loader two"></i>
              </div> : <div></div>}
          <div class="wallet-header login-menu">
            <h2>Welcome back! 🙌</h2>
          </div>

            <div class="login-menu-buttons-container">
                <button onClick={() => this.handleMetamaskClick()}>
                    <div>
                        <auth-image class="metamask" image={'https://skillwallet-demo-images.s3.us-east-2.amazonaws.com/metamask.svg'}></auth-image>
                        <p>{this.isPartner ? 'Login with Metamask' : 'Login with Metamask'}</p>
                    </div>
                </button>

                <button onClick={() => this.handlePortisClick()}>
                    <div>
                        <auth-image class="portis" image={'https://skillwallet-demo-images.s3.us-east-2.amazonaws.com/portis_icon.svg'}></auth-image>
                        <p>{this.isPartner ? 'Use Your Password' : 'Use Your Password'}</p>
                    </div>
                </button>

                <button 
                // onClick={() => this.handleMetamaskClick()}
                disabled={true}
                class={this.buttonClass}
                >
                    <div>
                        <p>{this.isPartner ? 'Scan QR Code' : 'Scan QR Code'}</p>
                    </div>
                </button>
            </div>
        </div>
    )
  }
}