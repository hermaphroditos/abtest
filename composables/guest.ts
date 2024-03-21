import type { Guest } from "@/types/guest.interface";

export function useGuest() {

  /** 
   * "guest_ab" cookie 
   * uuid: string;
   * url: string;
   * pageviews: number;
   * variantLetter: 'a' | 'b';
   * */ 
  const guest_ = useCookie<Guest>(
    'guest_ab',
    {
      default: () => ({
        uuid: `${Math.random().toString(16).substring(2, 10)}-${Math.random().toString(16).substring(2, 6)}-${Math.random().toString(16).substring(2, 6)}-${Math.random().toString(16).substring(2, 6)}-${Math.random().toString(16).substring(2, 14)}`,
        url: '',
        variantLetter: Math.random() > 0.5 ? 'a' : 'b'
      }),
      maxAge: 365 * 24 * 60 * 60 * 1000,
    }
  );

  /** 
   * Pageviews
   */
    const pageviews_ = useCookie<number>(
      'pageviews_cookie',
      {
        default: () => 0,
        maxAge: 365 * 24 * 60 * 60 * 1000,
      }
    );

  /** 
   * Increase Pageviews
   * */
  const incrementPageviews = () => {
    if (typeof window !== 'undefined') {
      guest_.value.url = window.location.href;
      console.log(guest_.value)
      // if the previous URL is different from the current URL, increment pageviews
      if (window.sessionStorage.getItem('previousUrl') !== window.location.href) {
        pageviews_.value += 1;
  
        // Update previous URL
        nextTick(() => {
          window.sessionStorage.setItem('previousUrl', window.location.href);
        });
      }
    }
  };

  return {
    guest_,
    pageviews_,
    incrementPageviews,
  };
}