import React from 'react';
import Link from 'gatsby-link';
import loremIpsum from 'lorem-ipsum';
import randomNumber from 'lodash.random';
import firstLetterCaps from 'lodash.capitalize';
import {createColor, colors, spacing} from '../styles';
import {Content, Spacer, Sizer, ButtonGroup, Flexer} from '../components/scaffold';
import Hero from '../components/hero';
import ColorList from '../components/color-list';
import Markdown from '../components/markdown';
import Grid from '../components/grid';
import { IconStandardEmail, IconStandardTwitter, IconStandardFacebook, IconStandardPhone, IconFeatureFeedback, IconFeatureSocial, IconFeatureDevelopment, IconFeatureEmail, IconFeatureOptimisation, IconFeatureAnalytics } from '../components/icons';
import LogoWithText, {LogoNoText} from '../components/logo';
import {HeadingOne, HeadingTwo, HeadingThree, Text} from '../components/headings';
import {ButtonPrimary, ButtonSecondary, ButtonTertiary, ButtonQuaternary} from '../components/buttons';

const ServicesPage = () => (
  <div>

    <Hero color={createColor('yellow')} arrow={['left', 'bottom']} element="header" padding={['medium', 0, 'large']}>

      <Spacer margin={[0, '-small']} padding={[0, 0, 'medium']}>
        <Flexer>
          {({Wrapper, Item}) => (
            <Wrapper wrap="wrap" justify="space-between">
              <Item grow="1">
                <Spacer padding={[0, 'small']}>
                  <ButtonTertiary href="/" color={createColor('misc', 'white')}>back</ButtonTertiary>
                </Spacer>
              </Item>
              <Item>
                <Spacer padding={[0, 'small']}>
                  <ButtonTertiary href="/services" color={createColor('misc', 'white')}>Services</ButtonTertiary>
                </Spacer>
              </Item>
              <Item>
                <Spacer padding={[0, 'small']}>
                  <ButtonTertiary color={createColor('misc', 'white')}>Something else</ButtonTertiary>
                </Spacer>
              </Item>
            </Wrapper>
          )}
        </Flexer>
      </Spacer>

      <Flexer>
        {({Wrapper, Item}) => (
          <Wrapper wrap="wrap" align="center">
            <Item>
              <Spacer padding={[0, 'large', 0, 0]}>
                <Link to="/">
                  <Sizer width={{ min: '80px', max: '100px' }}>
                    <LogoNoText color="yellow" background={createColor('yellow')}/>
                  </Sizer>
                </Link>
              </Spacer>
            </Item>
            <Item grow="1">
              <Spacer padding={['medium', 0]}>
                <HeadingOne color={createColor('misc', 'white')} isSpaceless>Services</HeadingOne>
              </Spacer>
            </Item>
          </Wrapper>
        )}
      </Flexer>

    </Hero>

    <main>

      <Spacer padding={['largest', 0, 0]}>
        <Content>

          <Flexer>
            {({Wrapper, Item}) => (
              <Wrapper wrap="wrap" align="center">
                <Item>
                  <Sizer height="70px">
                    <Spacer margin={['-15px', 0, 0, '-20px']} padding={[0, 'medium', 0, 0]}>
                      <Sizer width="100px">
                        <IconFeatureEmail />
                      </Sizer>
                    </Spacer>
                  </Sizer>
                </Item>
                <Item grow="1">
                  <Spacer margin={['-medium', 0]}>
                    <HeadingTwo color={createColor('blue')} isSpaceless id="Email marketing">Email marketing</HeadingTwo>
                  </Spacer>
                </Item>
              </Wrapper>
            )}
          </Flexer>

          <Spacer padding={['large', 0, 0]}>
              <Text isBlock weight="900" size="16px">
                <Markdown color="blue">{`Building a successful email marketing campaign has never been more important to target the right people, at the right time.

  Email marketing presents the most cost effective channel to keep in direct contact with your customers and prospects, and can yield the greatest opportunity to grow your business through conversion (ROI).`}</Markdown>
              </Text>
          </Spacer>

          <Text isBlock size="14px">
            <Markdown color="blue">{`Email marketing delivers exactly the message you want to deliver, to customers who have explicitly told you that they want to hear more from you.

[According to Chief Marketer](http://www.chiefmarketer.com/direct-mail-gets-most-response-but-email-has-highest-roi-dma/), email ROI is 28.5% compared to 7% for direct mail. But despite the evidence, we know that companies are still not spending enough time on optimisation and testing. A quality customer database and lack of strategy are the biggest roadblocks in the way of creating effective, measurable email marketing campaigns.

In order to create send successful email campaigns, your brand needs to penetrate a customer's busy lifestyle and stand out in their inbox. Customers respond better to personalised emails and most spend about 10-60 minutes browsing marketing emails during the week.

So what's going to work best for your business... and where do you start? You'll need to build up your list and decide on your marketing automation platform, then content, segmentation and personalisation, which will boost read and open rates.
[According to Experian](https://www.marketingsherpa.com/article/chart/personal-subject-lines), emails with personalized subject lines are 26% more likely to be opened than an email not referencing the person's name.

In New Zealand, commercial electronic messages are subject to a piece of legislation called the Unsolicited Electronic Messages Act 2007. This means you need permission from the recipient before you send them your business emails.
You can read more about this [here](https://www.marketing.org.nz/Understandthe3TypesofConsentRequiredtoSendMarketingEmails).

Talk to us to start about a strategy to get your message across the right people. We'll help you create mailing lists, perform segmentation and target mail drops with fresh, relevant and engaging content.`}</Markdown>
          </Text>

        </Content>
      </Spacer>

      <Spacer padding={['largest', 0, 0]}>
        <Content>

          <Flexer>
            {({Wrapper, Item}) => (
              <Wrapper wrap="wrap" align="center">
                <Item>
                  <Spacer margin={[0, 0, 0, '-20px']} padding={[0, 'medium', 0, 0]}>
                    <Sizer width="100px">
                      <IconFeatureOptimisation />
                    </Sizer>
                  </Spacer>
                </Item>
                <Item grow="1">
                  <Spacer margin={['-medium', 0]}>
                    <HeadingTwo color={createColor('green')} isSpaceless id="SEO & SEM">SEO & SEM</HeadingTwo>
                    <Spacer padding={['smallest', 0, 0]}>
                      <HeadingThree color={createColor('green')} isSpaceless>Search Engine Optimisation & Marketing</HeadingThree>
                    </Spacer>
                  </Spacer>
                </Item>
              </Wrapper>
            )}
          </Flexer>

          <Spacer padding={['large', 0, 0]}>
              <Text isBlock weight="900" size="16px">
                <Markdown color="green">{`So, you've already built your website... what now? You need to consider Search Engine Marketing (SEM).

The easier your website is to find, the more likely you are to generate good quality business. If your website is not easily searchable, you are closing the door on potentially the biggest source of new leads and growth.`}</Markdown>
              </Text>
          </Spacer>

          <Text isBlock size="14px">
            <Markdown color="green">{`[According to Google](https://www.thinkwithgoogle.com/intl/en-aunz/marketing-resources/data-measurement/mobile-measurement-potential-drive-growth/), 69% of smartphone owners turn to mobile search first. Then, 76% of people who search for something nearby on their smartphone visit a related business within a day, and 28% of those searches result in a purchase. So what does this mean if you're website doesn't have great SEO and no PPC up and running? Well, someone on their smartphone will need to go through many pages of search results to find you in their moment of need.

**What is SEO (search engine optimisation):** Your website must be search engine friendly in order to be crawled effectively and rank high. Google sets out numerous standards in order to rank high, including quality onpage content, user engagement, being mobile-friendly and site speed. These frequently change in line with industry enhancements.

**What is SEM (search engine marketing):** SEM refers to paid search engine listings that increase the visibility of your business, but is also an all encomapssing term for optimising your website to rank higher. Search engines such as Google, Yahoo and Bing all offer pay-per-click listings (PPC) services, with Google being the most prevelant. Your business can buy high ranking, low cost search engine listings in a variety of formats - small, large, text only, image/shopper ads after setting up campaigns and bidding on keywords/phrases at the Google ad auction.

We can help you start with a strategy focussed on keyword research, linkbuilding, benchmarking and onsite/off-site optimisation. If you're ready to get found by the right people, talk to us about your improving your SEO and SEM now.`}</Markdown>
          </Text>

        </Content>
      </Spacer>

      <Spacer padding={['largest', 0, 0]}>
        <Content>

          <Flexer>
            {({Wrapper, Item}) => (
              <Wrapper wrap="wrap" align="center">
                <Item>
                  <Spacer margin={[0, 0, 0, '-20px']} padding={[0, 'medium', 0, 0]}>
                    <Sizer width="100px">
                      <IconFeatureAnalytics />
                    </Sizer>
                  </Spacer>
                </Item>
                <Item grow="1">
                  <Spacer margin={['-medium', 0]}>
                    <HeadingTwo color={createColor('purple')} isSpaceless id="Analytics & Measuring Engagement">Analytics & Measuring Engagement</HeadingTwo>
                  </Spacer>
                </Item>
              </Wrapper>
            )}
          </Flexer>

          <Spacer padding={['large', 0, 0]}>
              <Text isBlock weight="900" size="16px">
                <Markdown color="purple">{`Finally finished your website and started promoting your services? Great! But what about measuring ROI against your marketing budget, campaigns and website performance?`}</Markdown>
              </Text>
          </Spacer>

          <Text isBlock size="14px">
            <Markdown color="purple">{`You need to start finding out as much as possible about your customers and prospects in order to make improvements and tweaks to stay ahead of your competitors. How about finding out how much time your visitors spend on your website vs. those who bouncing off, or what product pages are creating conversions vs. driving customers away, and what advertising channels are underperforming and killing your budget.

[A massive 60%](https://www.emarketer.com/Article/Small-Businesses-Social-ROI-Struggles-Wont-Stop/1012559) of small business owners are not able to track ROI from their social media activities. Despite this, businesses are still investing time and resource into social and other channels.

Don't settle for a limited marketing budget and advertising guesswork. We'll help you set goals for your business, perform campaign and customer tracking so you can focus on the results. You need to start measuring the success of your website and marketing spend by using insights from regular analytics and investing this information back into your business.


Talk to us about analytics and insights for your business and start making business decisions based on real data and actions.`}</Markdown>
          </Text>

        </Content>
      </Spacer>

      <Spacer padding={['largest', 0, 0]}>
        <Content>

          <Flexer>
            {({Wrapper, Item}) => (
              <Wrapper wrap="wrap" align="center">
                <Item>
                  <Spacer margin={[0, 0, 0, '-20px']} padding={[0, 'medium', 0, 0]}>
                    <Sizer width="100px">
                      <IconFeatureDevelopment />
                    </Sizer>
                  </Spacer>
                </Item>
                <Item grow="1">
                  <Spacer margin={['-medium', 0]}>
                    <HeadingTwo color={createColor('pink')} isSpaceless id="Website design & development">Website design & development</HeadingTwo>
                  </Spacer>
                </Item>
              </Wrapper>
            )}
          </Flexer>

          <Spacer padding={['large', 0, 0]}>
              <Text isBlock weight="900" size="16px">
                <Markdown color="pink">{`Need a digital presence for your business to grow e-commerce sales and/or foot traffic to your shop? We can put together a package that suit your needs, whether you're looking for a fully customised website solution or something on the more conservative side.`}</Markdown>
              </Text>
          </Spacer>

          <Text isBlock size="14px">
            <Markdown color="pink">{`[According to MBIE](http://www.mbie.govt.nz/info-services/business/business-growth-agenda/sectors-reports-series/pdf-image-library/the-small-business-sector-report-and-factsheet/small-business-factsheet-2016.pdf), small businesses dominate industries in New Zealand, with 97% of businesses comprising fewer than 20 employees. But only 69% of businesses have a website in some form.

We'll take the complexity out of designing and building a website for you. And if you're looking for ongoing maintenance and management we can fill any skill shortages you may have.

We take the time to understand your business and digital strategy in order to provide you the most appropriate solution. Whether you require a ground-up build, e-commerce addons so your customers can shop online, copywriting, help with SEO, advertising, or website growth strategies.

We can point you in the right direction and help you achieve the most for your business.

Get in touch with us to start planning your website today.
`}</Markdown>
          </Text>

        </Content>
      </Spacer>

      <Spacer padding={['largest', 0, 0]}>
        <Content>

          <Flexer>
            {({Wrapper, Item}) => (
              <Wrapper wrap="wrap" align="center">
                <Item>
                  <Spacer margin={[0, 0, 0, '-20px']} padding={[0, 'medium', 0, 0]}>
                    <Sizer width="100px">
                      <IconFeatureSocial />
                    </Sizer>
                  </Spacer>
                </Item>
                <Item grow="1">
                  <Spacer margin={['-medium', 0]}>
                    <HeadingTwo color={createColor('orange')} isSpaceless id="Social Media Management">Social Media Management</HeadingTwo>
                  </Spacer>
                </Item>
              </Wrapper>
            )}
          </Flexer>

          <Spacer padding={['large', 0, 0]}>
              <Text isBlock weight="900" size="16px">
                <Markdown color="orange">{`As the volume of your social channels increase so do your brand mentions, referrals and word of mouth. Searching out the gold among the glitter becomes increasingly more difficult as your business grows and you push for more converting customers.`}</Markdown>
              </Text>
          </Spacer>

          <Text isBlock size="14px">
            <Markdown color="orange">{`[According to Social Examiner](https://www.socialmediaexaminer.com/wp-content/uploads/2016/05/SocialMediaMarketingIndustryReport2016.pdf), one-third of people in the world use social networks regularly. Of businesses conducting Social marketing, only 68% of marketers analyze their social media activities with less than half agreeing their Facebook efforts were working.

Whether you do or don't conduct paid Social marketing, word will get out about your business. You need to make you business part of the conversation and keep control of what's being said.
Social media management allows you to combine your forces with easy to use tools that measure, analyse and help you make quick decisions that have far reaching impacts. You'll build credibility as a business, engagement with your customers and keep on top of trends.
We’ll help you understand and analyse the when, where and why behind brand mentions, and help manage outbound and incoming online interactions.

Get in touch with us to discuss Social Media Management for your business to start listening and influencing your customers and prospects.`}</Markdown>
          </Text>

        </Content>
      </Spacer>

      <Spacer padding={['largest', 0]}>
        <Content>

          <Flexer>
            {({Wrapper, Item}) => (
              <Wrapper wrap="wrap" align="center">
                <Item>
                  <Spacer margin={[0, 0, 0, '-20px']} padding={[0, 'medium', 0, 0]}>
                    <Sizer width="100px">
                      <IconFeatureFeedback />
                    </Sizer>
                  </Spacer>
                </Item>
                <Item grow="1">
                  <Spacer margin={['-medium', 0]}>
                    <HeadingTwo color={createColor('yellow')} isSpaceless id="Customer Feedback">Customer Feedback</HeadingTwo>
                  </Spacer>
                </Item>
              </Wrapper>
            )}
          </Flexer>

          <Spacer padding={['large', 0, 0]}>
              <Text isBlock weight="900" size="16px">
                <Markdown color="yellow">{`Would your customers recommend you to their family and friends? Do you know what delights them and what displeases them? Or what makes them loyal to your business?`}</Markdown>
              </Text>
          </Spacer>

          <Text isBlock size="14px">
            <Markdown color="yellow">{`[It's expected that by 2018](http://www.gartner.com/newsroom/id/3072017), more than 50 percent of organisations will implement significant business model changes in their efforts to improve customer experience. Customer Experience is breaking down barriers for businesses, with those who implement change finding success.

Customer Experience brings the connection, emotion and engagement of a customer's purchase back full circle to the business. A customer-centric business recognises each individual customer (and their purchase) and what impact that has in the bottom line. Essentially, it is putting the customer first to win loyalty, which will in turn result in better word of mouth and favour with others, to generate more business.

Start capturing feedback using Voice of Customer platforms to better understand where you need to invest more and what you're succeeding at. Through collecting feedback you'll be able to retain great customers, minimize negative feedback and increase love for your brand through engagement.

Talk to us about collecting feedback from your customers now. We'll help script your surveys, choose a great solution that works for you, and set you up so you can focus on providing a great experience.`}</Markdown>
          </Text>

        </Content>
      </Spacer>

    </main>

    <Hero color={createColor('blue')} arrow={['left', 'top']} element="footer" padding={['largest', 0]}>

      <Text color={createColor('misc', 'white')}>

        <HeadingTwo color={createColor('misc', 'white')}>We love working with <strong>local businesses</strong></HeadingTwo>

        <Spacer margin={['-medium', 0, 0]}>
          <Text isBlock color={createColor('blue', 'darkest')}>Contact us to talk about your growing your digital presence today.</Text>
        </Spacer>

        <Spacer margin={['large', '-medium', 0]}>
          <Grid>
            {({GridWrapper, GridItemTwoUp: Item}) => (
              <GridWrapper>

                <Item>
                  <Spacer padding={[0, 'medium', 'medium']}>
                    <Flexer>
                      {({Wrapper, Item}) => (
                        <Wrapper align="center">
                          <Item>
                            <Sizer width={{min: '20px', max: '30px'}}>
                              <IconStandardPhone />
                            </Sizer>
                          </Item>
                          <Item>
                            <Spacer padding={[0, 0, 0, 'medium']}>
                              <ButtonQuaternary color={createColor('misc', 'white')} href="tel:+64273058018">027 305 8018</ButtonQuaternary>
                            </Spacer>
                          </Item>
                        </Wrapper>
                      )}
                    </Flexer>
                  </Spacer>
                </Item>
                <Item>
                  <Spacer padding={[0, 'medium', 'medium']}>
                    <Flexer>
                      {({Wrapper, Item}) => (
                        <Wrapper align="center">
                          <Item>
                            <Sizer width={{min: '20px', max: '30px'}}>
                              <IconStandardEmail />
                            </Sizer>
                          </Item>
                          <Item>
                            <Spacer padding={[0, 0, 0, 'medium']}>
                              <ButtonQuaternary color={createColor('misc', 'white')} href="mailto:kelsey@enhancedigital.co.nz">kelsey@enhancedigital.co.nz</ButtonQuaternary>
                            </Spacer>
                          </Item>
                        </Wrapper>
                      )}
                    </Flexer>
                  </Spacer>
                </Item>
                <Item>
                  <Spacer padding={[0, 'medium', 'medium']}>
                    <Flexer>
                      {({Wrapper, Item}) => (
                        <Wrapper align="center">
                          <Item>
                            <Sizer width={{min: '20px', max: '30px'}}>
                              <IconStandardFacebook />
                            </Sizer>
                          </Item>
                          <Item>
                            <Spacer padding={[0, 0, 0, 'medium']}>
                              <ButtonQuaternary color={createColor('misc', 'white')} href="https://www.facebook.com/notifyenhancedigital/">@notifyenhancedigital</ButtonQuaternary>
                            </Spacer>
                          </Item>
                        </Wrapper>
                      )}
                    </Flexer>
                  </Spacer>
                </Item>
                <Item>
                  <Spacer padding={[0, 'medium', 'medium']}>
                    <Flexer>
                      {({Wrapper, Item}) => (
                        <Wrapper align="center">
                          <Item>
                            <Sizer width={{min: '20px', max: '30px'}}>
                              <IconStandardTwitter />
                            </Sizer>
                          </Item>
                          <Item>
                            <Spacer padding={[0, 0, 0, 'medium']}>
                              <ButtonQuaternary color={createColor('misc', 'white')} href="#">xxxxxxxxxxxxxxxxx</ButtonQuaternary>
                            </Spacer>
                          </Item>
                        </Wrapper>
                      )}
                    </Flexer>
                  </Spacer>
                </Item>

              </GridWrapper>
            )}
            </Grid>
          </Spacer>

      </Text>

    </Hero>

  </div>
)

export default ServicesPage
