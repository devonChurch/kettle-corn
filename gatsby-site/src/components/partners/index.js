import React from 'react';
import {createColor} from '../../styles';
import Grid from '../grid';
import {Spacer, Sizer, Flexer} from '../scaffold';
import askNicely from '../../images/partners/ask-nicely.svg';
import facebook from '../../images/partners/facebook.svg';
import googleAnalytics from '../../images/partners/google-analytics.svg';
import mailChimp from '../../images/partners/mail-chimp.svg';
import optimizely from '../../images/partners/optimizely.svg';
import shopify from '../../images/partners/shopify.svg';
import wordpress from '../../images/partners/wordpress.svg';
import youtube from '../../images/partners/youtube.svg';

console.log({askNicely});

const Partners = ({title, id, color, Icon, blurb}) => {

  return (
    <Grid>
      {({GridWrapper, GridItemFourUp: Item}) => (
        <GridWrapper>
          <Item>
            <img src={askNicely} alt="Ask Nicely"/>
          </Item>
          <Item>
            <img src={facebook} alt="Facebook"/>
          </Item>
          <Item>
            <img src={googleAnalytics} alt="Google Analytics"/>
          </Item>
          <Item>
            <img src={mailChimp} alt="Mail Chimp"/>
          </Item>
          <Item>
            <img src={optimizely} alt="Optimizely"/>
          </Item>
          <Item>
            <img src={shopify} alt="Shopify"/>
          </Item>
          <Item>
            <img src={wordpress} alt="Wordpress"/>
          </Item>
          <Item>
            <img src={youtube} alt="Youtube"/>
          </Item>
        </GridWrapper>
      )}
    </Grid>
  );

};

export default Partners;
