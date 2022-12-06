export interface ITCKimlikGirdileri {
    tc: number
    ad: string
    soyad: string
    dogum_gun: number
    dogum_ay: number
    dogum_yil: number
    cuzdan_seri: string
    cuzdan_no: number
  }
  declare const TCKimlikDogrulayici: (params: ITCKimlikGirdileri) => Promise<boolean>
  export default TCKimlikDogrulayici