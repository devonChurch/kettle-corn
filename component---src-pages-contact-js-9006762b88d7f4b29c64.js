webpackJsonp([70144966829960],{

/***/ "./src/components/contact/options/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _contact = __webpack_require__("./src/data/contact/index.js");
	
	var _contact2 = _interopRequireDefault(_contact);
	
	var _grid = __webpack_require__("./src/components/grid/index.js");
	
	var _grid2 = _interopRequireDefault(_grid);
	
	var _scaffold = __webpack_require__("./src/components/scaffold/index.js");
	
	var _buttons = __webpack_require__("./src/components/buttons/index.js");
	
	var _styles = __webpack_require__("./src/styles/index.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ContactOptions = function ContactOptions(_ref) {
	  var _ref$color = _ref.color,
	      color = _ref$color === undefined ? (0, _styles.createColor)('gray') : _ref$color;
	
	
	  return _react2.default.createElement(
	    _scaffold.Spacer,
	    { margin: [0, '-medium'] },
	    _react2.default.createElement(
	      _grid2.default,
	      null,
	      function (_ref2) {
	        var GridWrapper = _ref2.GridWrapper,
	            Item = _ref2.GridItemTwoUp;
	        return _react2.default.createElement(
	          GridWrapper,
	          null,
	          Object.keys(_contact2.default).map(function (key) {
	            var _contact$key = _contact2.default[key],
	                display = _contact$key.display,
	                href = _contact$key.href,
	                Icon = _contact$key.Icon;
	
	
	            return _react2.default.createElement(
	              Item,
	              { key: key },
	              _react2.default.createElement(
	                _scaffold.Spacer,
	                { padding: [0, 'medium', 'medium'] },
	                _react2.default.createElement(
	                  _scaffold.Flexer,
	                  null,
	                  function (_ref3) {
	                    var Wrapper = _ref3.Wrapper,
	                        Item = _ref3.Item;
	                    return _react2.default.createElement(
	                      Wrapper,
	                      { align: 'center' },
	                      _react2.default.createElement(
	                        Item,
	                        null,
	                        _react2.default.createElement(
	                          _scaffold.Sizer,
	                          { width: { min: '20px', max: '30px' } },
	                          _react2.default.createElement(Icon, { color: color })
	                        )
	                      ),
	                      _react2.default.createElement(
	                        Item,
	                        null,
	                        _react2.default.createElement(
	                          _scaffold.Spacer,
	                          { padding: [0, 0, 0, 'medium'] },
	                          _react2.default.createElement(
	                            _buttons.ButtonQuaternary,
	                            { color: color, href: href },
	                            display
	                          )
	                        )
	                      )
	                    );
	                  }
	                )
	              )
	            );
	          })
	        );
	      }
	    )
	  );
	};
	
	exports.default = ContactOptions;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/components/footers/standard/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__("./node_modules/gatsby-link/index.js");
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _hero = __webpack_require__("./src/components/hero/index.js");
	
	var _hero2 = _interopRequireDefault(_hero);
	
	var _grid = __webpack_require__("./src/components/grid/index.js");
	
	var _grid2 = _interopRequireDefault(_grid);
	
	var _scaffold = __webpack_require__("./src/components/scaffold/index.js");
	
	var _buttons = __webpack_require__("./src/components/buttons/index.js");
	
	var _logo = __webpack_require__("./src/components/logo/index.js");
	
	var _headings = __webpack_require__("./src/components/headings/index.js");
	
	var _options = __webpack_require__("./src/components/contact/options/index.js");
	
	var _options2 = _interopRequireDefault(_options);
	
	var _styles = __webpack_require__("./src/styles/index.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FooterStandard = function FooterStandard(_ref) {
	  var children = _ref.children,
	      _ref$title = _ref.title,
	      title = _ref$title === undefined ? 'Enhance Digital' : _ref$title,
	      background = _ref.background;
	
	
	  return _react2.default.createElement(
	    _hero2.default,
	    { color: (0, _styles.createColor)('blue'), arrow: ['left', 'top'], element: 'footer', padding: ['largest', 0, 'large'] },
	    _react2.default.createElement(
	      _headings.Text,
	      { color: (0, _styles.createColor)('misc', 'white') },
	      _react2.default.createElement(
	        _headings.HeadingTwo,
	        { id: 'talk-to-us', color: (0, _styles.createColor)('misc', 'white') },
	        'We love working with ',
	        _react2.default.createElement(
	          'strong',
	          null,
	          'local businesses'
	        )
	      ),
	      _react2.default.createElement(
	        _scaffold.Spacer,
	        { margin: ['-medium', 0, 0] },
	        _react2.default.createElement(
	          _headings.Text,
	          { isBlock: true, color: (0, _styles.createColor)('blue', 'darkest') },
	          'Contact us to talk about your growing your digital presence today.'
	        )
	      ),
	      _react2.default.createElement(
	        _scaffold.Spacer,
	        { margin: ['large', 0, 0] },
	        _react2.default.createElement(_options2.default, { color: (0, _styles.createColor)('misc', 'white') })
	      )
	    )
	  );
	};
	
	exports.default = FooterStandard;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/components/form/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.FormTextArea = exports.FormInput = exports.Form = exports.default = undefined;
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _headings = __webpack_require__("./src/components/headings/index.js");
	
	var _styles = __webpack_require__("./src/styles/index.js");
	
	var _styles2 = __webpack_require__("./src/components/form/styles.js");
	
	var _styles3 = _interopRequireDefault(_styles2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Sform = _styles3.default.Sform,
	    Slabel = _styles3.default.Slabel,
	    Sinput = _styles3.default.Sinput,
	    StextArea = _styles3.default.StextArea,
	    Sname = _styles3.default.Sname;
	
	
	var Form = function Form(_ref) {
	  var children = _ref.children,
	      handleSubmit = _ref.handleSubmit;
	
	
	  return _react2.default.createElement(
	    Sform,
	    { onSubmit: handleSubmit },
	    children
	  );
	};
	
	var FormInput = function FormInput(_ref2) {
	  var label = _ref2.label,
	      handleChange = _ref2.handleChange,
	      value = _ref2.value,
	      type = _ref2.type,
	      invalidMessage = _ref2.invalidMessage;
	
	
	  var isPopulated = Boolean(value);
	  var isInvalid = Boolean(invalidMessage);
	
	  return _react2.default.createElement(
	    Slabel,
	    null,
	    _react2.default.createElement(Sinput, { type: 'text', name: label, value: value, isInvalid: isInvalid, isPopulated: isPopulated, onChange: function onChange(e) {
	        return handleChange(e.target.value);
	      } }),
	    _react2.default.createElement(
	      Sname,
	      { isPopulated: isPopulated, isInvalid: isInvalid },
	      label
	    ),
	    _react2.default.createElement(
	      _headings.Text,
	      { size: '12px', color: (0, _styles.createColor)('red') },
	      isInvalid ? invalidMessage : '\xA0'
	    )
	  );
	};
	
	var FormTextArea = function FormTextArea(_ref3) {
	  var label = _ref3.label,
	      handleChange = _ref3.handleChange,
	      value = _ref3.value,
	      type = _ref3.type,
	      invalidMessage = _ref3.invalidMessage;
	
	
	  var isPopulated = Boolean(value);
	  var isInvalid = Boolean(invalidMessage);
	
	  return _react2.default.createElement(
	    Slabel,
	    null,
	    _react2.default.createElement(StextArea, { type: 'text', name: label, value: value, isInvalid: isInvalid, isPopulated: isPopulated, onChange: function onChange(e) {
	        return handleChange(e.target.value);
	      } }),
	    _react2.default.createElement(
	      Sname,
	      { isPopulated: isPopulated, isInvalid: isInvalid },
	      label
	    ),
	    _react2.default.createElement(
	      _headings.Text,
	      { size: '12px', color: (0, _styles.createColor)('red') },
	      isInvalid ? invalidMessage : '\xA0'
	    )
	  );
	};
	
	var form = { Form: Form, FormInput: FormInput, FormTextArea: FormTextArea };
	
	exports.default = form;
	exports.Form = Form;
	exports.FormInput = FormInput;
	exports.FormTextArea = FormTextArea;

/***/ }),

/***/ "./src/components/form/styles.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  border: 3px solid ', ';\n  border-radius: ', ';\n  font-size: ', ';\n  outline: 0;\n  padding: ', ' ', ';\n  transition-duration: ', ';\n  transition-property: border-color, color;\n  width: 100%;\n\n  &:focus {\n    border-color: ', ';\n    color: ', ';\n\n    + * {\n      color: ', ';\n      transform: scale(0.8) translate(0, 0);\n    }\n  }\n\n  ', '\n\n  ', '\n'], ['\n  border: 3px solid ', ';\n  border-radius: ', ';\n  font-size: ', ';\n  outline: 0;\n  padding: ', ' ', ';\n  transition-duration: ', ';\n  transition-property: border-color, color;\n  width: 100%;\n\n  &:focus {\n    border-color: ', ';\n    color: ', ';\n\n    + * {\n      color: ', ';\n      transform: scale(0.8) translate(0, 0);\n    }\n  }\n\n  ', '\n\n  ', '\n']),
	    _templateObject2 = _taggedTemplateLiteralLoose(['\n    border-color: ', ';\n    color: ', ';\n  '], ['\n    border-color: ', ';\n    color: ', ';\n  ']),
	    _templateObject3 = _taggedTemplateLiteralLoose(['\n    max-width: ', ';\n  '], ['\n    max-width: ', ';\n  ']),
	    _templateObject4 = _taggedTemplateLiteralLoose(['\n    display: block;\n    padding: ', ' 0;\n    position: relative;\n  '], ['\n    display: block;\n    padding: ', ' 0;\n    position: relative;\n  ']),
	    _templateObject5 = _taggedTemplateLiteralLoose(['\n    color: ', ';\n    left: 0;\n    position: absolute;\n    top: 0;\n    transform: translate(', ', ', ');\n    transform-origin: left top;\n    transition-duration: ', ';\n    transition-property: color, transform;\n\n    ', '\n\n    ', '\n  '], ['\n    color: ', ';\n    left: 0;\n    position: absolute;\n    top: 0;\n    transform: translate(', ', ', ');\n    transform-origin: left top;\n    transition-duration: ', ';\n    transition-property: color, transform;\n\n    ', '\n\n    ', '\n  ']),
	    _templateObject6 = _taggedTemplateLiteralLoose(['\n      color: ', ';\n      transform: scale(0.8) translate(0, 0);\n    '], ['\n      color: ', ';\n      transform: scale(0.8) translate(0, 0);\n    ']),
	    _templateObject7 = _taggedTemplateLiteralLoose(['\n      color: ', ';\n    '], ['\n      color: ', ';\n    ']);
	
	var _styledComponents = __webpack_require__("../node_modules/styled-components/lib/index.js");
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _polished = __webpack_require__("../node_modules/polished/lib/index.js");
	
	var _styles = __webpack_require__("./src/styles/index.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var Sinput = _styledComponents2.default.input(_templateObject, (0, _styles.createColor)('gray', 'light'), _styles.misc.radius, (0, _polished.rem)('16px'), _styles.spacing.small.min, _styles.spacing.small.max, _styles.speed.fast, (0, _styles.createColor)('blue'), (0, _styles.createColor)('blue', 'darkest'), (0, _styles.createColor)('blue'), function (_ref) {
	  var isPopulated = _ref.isPopulated;
	  return isPopulated && (0, _styledComponents.css)(_templateObject2, (0, _styles.createColor)('gray', 'dark'), (0, _styles.createColor)('gray', 'darkest'));
	}, function (_ref2) {
	  var isInvalid = _ref2.isInvalid;
	  return isInvalid && (0, _styledComponents.css)(_templateObject2, (0, _styles.createColor)('red'), (0, _styles.createColor)('red', 'darkest'));
	});
	
	var style = {
	
	  Sform: _styledComponents2.default.form(_templateObject3, _styles.breakpoints.small),
	
	  Slabel: _styledComponents2.default.label(_templateObject4, (0, _polished.rem)('20px')),
	
	  Sinput: Sinput,
	
	  StextArea: Sinput.withComponent('textarea').extend(_templateObject3, _styles.breakpoints.small),
	
	  Sname: _styledComponents2.default.div(_templateObject5, (0, _styles.createColor)('gray', 'light'), _styles.spacing.small.max, (0, _polished.rem)('30px'), _styles.speed.fast, function (_ref3) {
	    var isPopulated = _ref3.isPopulated;
	    return isPopulated && (0, _styledComponents.css)(_templateObject6, (0, _styles.createColor)('gray', 'dark'));
	  }, function (_ref4) {
	    var isInvalid = _ref4.isInvalid;
	    return isInvalid && (0, _styledComponents.css)(_templateObject7, (0, _styles.createColor)('red'));
	  })
	
	};
	
	exports.default = style;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/components/services/article/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__("./src/styles/index.js");
	
	var _markdown = __webpack_require__("./src/components/markdown/index.js");
	
	var _markdown2 = _interopRequireDefault(_markdown);
	
	var _scaffold = __webpack_require__("./src/components/scaffold/index.js");
	
	var _headings = __webpack_require__("./src/components/headings/index.js");
	
	var _buttons = __webpack_require__("./src/components/buttons/index.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ServicesArticle = function ServicesArticle(_ref) {
	  var title = _ref.title,
	      id = _ref.id,
	      color = _ref.color,
	      Icon = _ref.Icon,
	      content = _ref.content;
	
	
	  var paragraphs = content.split('\n').filter(function (paragraph) {
	    return paragraph;
	  });
	  var introductionSize = 2;
	  var isIntroduction = paragraphs.length > introductionSize;
	  var introduction = isIntroduction && paragraphs.slice(0, introductionSize).join('\n\n');
	  var bodyCopy = isIntroduction ? paragraphs.slice(introductionSize).join('\n\n') : content;
	
	  return _react2.default.createElement(
	    _scaffold.Spacer,
	    null,
	    _react2.default.createElement(
	      _scaffold.Flexer,
	      null,
	      function (_ref2) {
	        var Wrapper = _ref2.Wrapper,
	            Item = _ref2.Item;
	        return _react2.default.createElement(
	          Wrapper,
	          { wrap: 'wrap', align: 'center' },
	          _react2.default.createElement(
	            Item,
	            null,
	            _react2.default.createElement(
	              _scaffold.Spacer,
	              { margin: ['-15px', 0, 0, '-20px'], padding: [0, 'medium', 0, 0] },
	              _react2.default.createElement(
	                _scaffold.Sizer,
	                { width: '100px' },
	                _react2.default.createElement(Icon, null)
	              )
	            )
	          ),
	          _react2.default.createElement(
	            Item,
	            { grow: '1' },
	            _react2.default.createElement(
	              _scaffold.Spacer,
	              { margin: ['-medium', 0] },
	              _react2.default.createElement(
	                _headings.HeadingTwo,
	                { color: (0, _styles.createColor)(color), isSpaceless: true, id: id },
	                title
	              )
	            )
	          )
	        );
	      }
	    ),
	    _react2.default.createElement(
	      _scaffold.Spacer,
	      { padding: ['large', 0, 0] },
	      introduction && _react2.default.createElement(
	        _headings.Text,
	        { isBlock: true, weight: '900', size: '16px' },
	        _react2.default.createElement(
	          _markdown2.default,
	          { color: color },
	          introduction
	        )
	      ),
	      _react2.default.createElement(
	        _headings.Text,
	        { isBlock: true, size: '14px' },
	        _react2.default.createElement(
	          _markdown2.default,
	          { color: color },
	          bodyCopy
	        )
	      )
	    )
	  );
	};
	
	exports.default = ServicesArticle;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/data/contact/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _icons = __webpack_require__("./src/components/icons/index.js");
	
	var contact = {
	
	  email: {
	    name: 'Email',
	    display: 'kelsey@enhancedigital.co.nz',
	    href: 'mailto:kelsey@enhancedigital.co.nz',
	    Icon: _icons.IconStandardEmail
	  },
	
	  phone: {
	    name: 'Phone',
	    display: '027 305 8018',
	    href: 'tel:+64273058018',
	    Icon: _icons.IconStandardPhone
	  },
	
	  facebook: {
	    name: 'Facebook',
	    display: '@notifyenhancedigital',
	    href: 'https://www.facebook.com/notifyenhancedigital/',
	    Icon: _icons.IconStandardFacebook
	  }
	
	};
	
	exports.default = contact;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/data/services/analytics.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _icons = __webpack_require__("./src/components/icons/index.js");
	
	var analytics = {
	
	  title: 'Analytics & Measuring Engagement',
	
	  id: 'analytics',
	
	  color: 'purple',
	
	  Icon: _icons.IconFeatureAnalytics,
	
	  blurb: 'Remove the guesswork. Start tracking your customers, prospects and competitors now to optimise your digital marketing spend.',
	
	  content: 'Finally finished your website and started promoting your services? Great! But what about measuring ROI against your marketing budget, campaigns and website performance?\n\nYou need to start finding out as much as possible about your customers and prospects in order to make improvements and tweaks to stay ahead of your competitors. How about finding out how much time your visitors spend on your website vs. those who bouncing off, or what product pages are creating conversions vs. driving customers away, and what advertising channels are underperforming and killing your budget.\n\n[A massive 60%](https://www.emarketer.com/Article/Small-Businesses-Social-ROI-Struggles-Wont-Stop/1012559) of small business owners are not able to track ROI from their social media activities. Despite this, businesses are still investing time and resource into social and other channels.\n\nDon\'t settle for a limited marketing budget and advertising guesswork. We\'ll help you set goals for your business, perform campaign and customer tracking so you can focus on the results. You need to start measuring the success of your website and marketing spend by using insights from regular analytics and investing this information back into your business.\n\nTalk to us about analytics and insights for your business and start making business decisions based on real data and actions.'
	
	};
	
	exports.default = analytics;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/data/services/development.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _icons = __webpack_require__("./src/components/icons/index.js");
	
	var development = {
	
	  title: 'Website design and development',
	
	  id: 'development',
	
	  color: 'pink',
	
	  Icon: _icons.IconFeatureDevelopment,
	
	  blurb: 'Let us build and manage your digital footprint so you can stand out from the crowd.',
	
	  content: 'Need a digital presence for your business to grow e-commerce sales and/or foot traffic to your shop? We can put together a package that suit your needs, whether you\'re looking for a fully customised website solution or something on the more conservative side.\n\n[According to MBIE](http://www.mbie.govt.nz/info-services/business/business-growth-agenda/sectors-reports-series/pdf-image-library/the-small-business-sector-report-and-factsheet/small-business-factsheet-2016.pdf), small businesses dominate industries in New Zealand, with 97% of businesses comprising fewer than 20 employees. But only 69% of businesses have a website in some form.\n\nWe\'ll take the complexity out of designing and building a website for you. And if you\'re looking for ongoing maintenance and management we can fill any skill shortages you may have.\n\nWe take the time to understand your business and digital strategy in order to provide you the most appropriate solution. Whether you require a ground-up build, e-commerce addons so your customers can shop online, copywriting, help with SEO, advertising, or website growth strategies.\n\nWe can point you in the right direction and help you achieve the most for your business.\n\nGet in touch with us to start planning your website today.'
	
	};
	
	exports.default = development;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/data/services/email.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _icons = __webpack_require__("./src/components/icons/index.js");
	
	var email = {
	
	  title: 'Email marketing',
	
	  id: 'email-marketing',
	
	  color: 'blue',
	
	  Icon: _icons.IconFeatureEmail,
	
	  blurb: 'Get smart with your email marketing strategy – no one wants more junk mail.',
	
	  content: 'Building a successful email marketing campaign has never been more important to target the right people, at the right time.\n\nEmail marketing presents the most cost effective channel to keep in direct contact with your customers and prospects, and can yield the greatest opportunity to grow your business through conversion (ROI).\n\nEmail marketing delivers exactly the message you want to deliver, to customers who have explicitly told you that they want to hear more from you.\n\n[According to Chief Marketer](http://www.chiefmarketer.com/direct-mail-gets-most-response-but-email-has-highest-roi-dma/), email ROI is 28.5% compared to 7% for direct mail. But despite the evidence, we know that companies are still not spending enough time on optimisation and testing. A quality customer database and lack of strategy are the biggest roadblocks in the way of creating effective, measurable email marketing campaigns.\n\nIn order to create send successful email campaigns, your brand needs to penetrate a customer\'s busy lifestyle and stand out in their inbox. Customers respond better to personalised emails and most spend about 10-60 minutes browsing marketing emails during the week.\n\nSo what\'s going to work best for your business... and where do you start? You\'ll need to build up your list and decide on your marketing automation platform, then content, segmentation and personalisation, which will boost read and open rates.\n[According to Experian](https://www.marketingsherpa.com/article/chart/personal-subject-lines), emails with personalized subject lines are 26% more likely to be opened than an email not referencing the person\'s name.\n\nIn New Zealand, commercial electronic messages are subject to a piece of legislation called the Unsolicited Electronic Messages Act 2007. This means you need permission from the recipient before you send them your business emails. You can read more about this [here](https://www.marketing.org.nz/Understandthe3TypesofConsentRequiredtoSendMarketingEmails).\n\nTalk to us to start about a strategy to get your message across the right people. We\'ll help you create mailing lists, perform segmentation and target mail drops with fresh, relevant and engaging content.'
	
	};
	
	exports.default = email;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/data/services/feedback.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _icons = __webpack_require__("./src/components/icons/index.js");
	
	var feedback = {
	
	  title: 'Customer Feedback',
	
	  id: 'customer-feedback',
	
	  color: 'yellow',
	
	  Icon: _icons.IconFeatureFeedback,
	
	  blurb: 'Start capturing the Voice of your Customer so you can focus on increasing your brand love.',
	
	  content: 'Would your customers recommend you to their family and friends? Do you know what delights them and what displeases them? Or what makes them loyal to your business?\n\n[It\'s expected that by 2018](http://www.gartner.com/newsroom/id/3072017), more than 50 percent of organisations will implement significant business model changes in their efforts to improve customer experience. Customer Experience is breaking down barriers for businesses, with those who implement change finding success.\n\nCustomer Experience brings the connection, emotion and engagement of a customer\'s purchase back full circle to the business. A customer-centric business recognises each individual customer (and their purchase) and what impact that has in the bottom line. Essentially, it is putting the customer first to win loyalty, which will in turn result in better word of mouth and favour with others, to generate more business.\n\nStart capturing feedback using Voice of Customer platforms to better understand where you need to invest more and what you\'re succeeding at. Through collecting feedback you\'ll be able to retain great customers, minimize negative feedback and increase love for your brand through engagement.\n\nTalk to us about collecting feedback from your customers now. We\'ll help script your surveys, choose a great solution that works for you, and set you up so you can focus on providing a great experience.'
	
	};
	
	exports.default = feedback;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/data/services/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _feedback = __webpack_require__("./src/data/services/feedback.js");
	
	var _feedback2 = _interopRequireDefault(_feedback);
	
	var _social = __webpack_require__("./src/data/services/social.js");
	
	var _social2 = _interopRequireDefault(_social);
	
	var _development = __webpack_require__("./src/data/services/development.js");
	
	var _development2 = _interopRequireDefault(_development);
	
	var _email = __webpack_require__("./src/data/services/email.js");
	
	var _email2 = _interopRequireDefault(_email);
	
	var _optimisation = __webpack_require__("./src/data/services/optimisation.js");
	
	var _optimisation2 = _interopRequireDefault(_optimisation);
	
	var _analytics = __webpack_require__("./src/data/services/analytics.js");
	
	var _analytics2 = _interopRequireDefault(_analytics);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var services = {
	  email: _email2.default,
	  analytics: _analytics2.default,
	  optimisation: _optimisation2.default,
	  development: _development2.default,
	  social: _social2.default,
	  feedback: _feedback2.default
	};
	
	exports.default = services;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/data/services/optimisation.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _icons = __webpack_require__("./src/components/icons/index.js");
	
	var optimisation = {
	
	  title: 'Search Engine Optimisation and Marketing (SEO & SEM)',
	
	  id: 'optimisation',
	
	  color: 'green',
	
	  Icon: _icons.IconFeatureOptimisation,
	
	  blurb: 'Sort out your SEO and SEM before you and your customers end up in circles.',
	
	  content: 'So, you\'ve already built your website... what now? You need to consider Search Engine Marketing (SEM).\n\nThe easier your website is to find, the more likely you are to generate good quality business. If your website is not easily searchable, you are closing the door on potentially the biggest source of new leads and growth.\n\n[According to Google](https://www.thinkwithgoogle.com/intl/en-aunz/marketing-resources/data-measurement/mobile-measurement-potential-drive-growth/), 69% of smartphone owners turn to mobile search first. Then, 76% of people who search for something nearby on their smartphone visit a related business within a day, and 28% of those searches result in a purchase. So what does this mean if you\'re website doesn\'t have great SEO and no PPC up and running? Well, someone on their smartphone will need to go through many pages of search results to find you in their moment of need.\n\n**What is SEO (search engine optimisation):** Your website must be search engine friendly in order to be crawled effectively and rank high. Google sets out numerous standards in order to rank high, including quality onpage content, user engagement, being mobile-friendly and site speed. These frequently change in line with industry enhancements.\n\n**What is SEM (search engine marketing):** SEM refers to paid search engine listings that increase the visibility of your business, but is also an all encomapssing term for optimising your website to rank higher. Search engines such as Google, Yahoo and Bing all offer pay-per-click listings (PPC) services, with Google being the most prevelant. Your business can buy high ranking, low cost search engine listings in a variety of formats - small, large, text only, image/shopper ads after setting up campaigns and bidding on keywords/phrases at the Google ad auction.\n\nWe can help you start with a strategy focussed on keyword research, linkbuilding, benchmarking and onsite/off-site optimisation. If you\'re ready to get found by the right people, talk to us about your improving your SEO and SEM now.'
	
	};
	
	exports.default = optimisation;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/data/services/social.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _icons = __webpack_require__("./src/components/icons/index.js");
	
	var social = {
	
	  title: 'Social Media Management',
	
	  id: 'social-media',
	
	  color: 'orange',
	
	  Icon: _icons.IconFeatureSocial,
	
	  blurb: 'People are always talking, so put your ear to the ground and start influencing.',
	
	  content: 'As the volume of your social channels increase so do your brand mentions, referrals and word of mouth. Searching out the gold among the glitter becomes increasingly more difficult as your business grows and you push for more converting customers.\n\n[According to Social Examiner](https://www.socialmediaexaminer.com/wp-content/uploads/2016/05/SocialMediaMarketingIndustryReport2016.pdf), one-third of people in the world use social networks regularly. Of businesses conducting Social marketing, only 68% of marketers analyze their social media activities with less than half agreeing their Facebook efforts were working.\n\nWhether you do or don\'t conduct paid Social marketing, word will get out about your business. You need to make you business part of the conversation and keep control of what\'s being said. Social media management allows you to combine your forces with easy to use tools that measure, analyse and help you make quick decisions that have far reaching impacts. You\'ll build credibility as a business, engagement with your customers and keep on top of trends. We\u2019ll help you understand and analyse the when, where and why behind brand mentions, and help manage outbound and incoming online interactions.\n\nGet in touch with us to discuss Social Media Management for your business to start listening and influencing your customers and prospects.'
	
	};
	
	exports.default = social;
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/devon-church/Documents/projects/kettle-corn/gatsby-site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/Users/devon-church/Documents/projects/kettle-corn/gatsby-site/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/devon-church/Documents/projects/kettle-corn/gatsby-site/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[[\"/Users/devon-church/Documents/projects/kettle-corn/gatsby-site/node_modules/babel-preset-env/lib/index.js\",{\"loose\":true,\"uglify\":true,\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"IE >= 9\"]},\"exclude\":[\"transform-regenerator\",\"transform-es2015-typeof-symbol\"]}],\"/Users/devon-church/Documents/projects/kettle-corn/gatsby-site/node_modules/babel-preset-stage-0/lib/index.js\",\"/Users/devon-church/Documents/projects/kettle-corn/gatsby-site/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/pages/contact.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__("./node_modules/gatsby-link/index.js");
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _loremIpsum = __webpack_require__("../node_modules/lorem-ipsum/lib/generator.js");
	
	var _loremIpsum2 = _interopRequireDefault(_loremIpsum);
	
	var _lodash = __webpack_require__("../node_modules/lodash.random/index.js");
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _lodash3 = __webpack_require__("../node_modules/lodash.capitalize/index.js");
	
	var _lodash4 = _interopRequireDefault(_lodash3);
	
	var _styles = __webpack_require__("./src/styles/index.js");
	
	var _services = __webpack_require__("./src/data/services/index.js");
	
	var _services2 = _interopRequireDefault(_services);
	
	var _scaffold = __webpack_require__("./src/components/scaffold/index.js");
	
	var _hero = __webpack_require__("./src/components/hero/index.js");
	
	var _hero2 = _interopRequireDefault(_hero);
	
	var _colorList = __webpack_require__("./src/components/color-list/index.js");
	
	var _colorList2 = _interopRequireDefault(_colorList);
	
	var _markdown = __webpack_require__("./src/components/markdown/index.js");
	
	var _markdown2 = _interopRequireDefault(_markdown);
	
	var _grid = __webpack_require__("./src/components/grid/index.js");
	
	var _grid2 = _interopRequireDefault(_grid);
	
	var _icons = __webpack_require__("./src/components/icons/index.js");
	
	var _logo = __webpack_require__("./src/components/logo/index.js");
	
	var _logo2 = _interopRequireDefault(_logo);
	
	var _headings = __webpack_require__("./src/components/headings/index.js");
	
	var _buttons = __webpack_require__("./src/components/buttons/index.js");
	
	var _standard = __webpack_require__("./src/components/headers/standard/index.js");
	
	var _standard2 = _interopRequireDefault(_standard);
	
	var _standard3 = __webpack_require__("./src/components/footers/standard/index.js");
	
	var _standard4 = _interopRequireDefault(_standard3);
	
	var _article = __webpack_require__("./src/components/services/article/index.js");
	
	var _article2 = _interopRequireDefault(_article);
	
	var _options = __webpack_require__("./src/components/contact/options/index.js");
	
	var _options2 = _interopRequireDefault(_options);
	
	var _form = __webpack_require__("./src/components/form/index.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Presentation = function Presentation(_ref) {
	  var handleSubmit = _ref.handleSubmit,
	      handleChange = _ref.handleChange,
	      values = _ref.values,
	      isSubmitDisabled = _ref.isSubmitDisabled,
	      statusMessage = _ref.statusMessage,
	      invalidMessages = _ref.invalidMessages;
	  return _react2.default.createElement(
	    _scaffold.Page,
	    null,
	    _react2.default.createElement(_standard2.default, { title: 'Talk to us', background: (0, _styles.createColor)('blue') }),
	    _react2.default.createElement(
	      'main',
	      null,
	      _react2.default.createElement(
	        _scaffold.Spacer,
	        { padding: ['largest', 0] },
	        _react2.default.createElement(
	          _scaffold.Content,
	          null,
	          _react2.default.createElement(
	            _headings.HeadingTwo,
	            { color: (0, _styles.createColor)('blue') },
	            _react2.default.createElement(
	              _headings.Text,
	              { color: (0, _styles.createColor)('gray', 'light') },
	              'We love working with'
	            ),
	            ' ',
	            _react2.default.createElement(
	              _headings.Text,
	              { weight: 700 },
	              'local businesses'
	            )
	          ),
	          _react2.default.createElement(
	            _headings.Text,
	            { isBlock: true, color: (0, _styles.createColor)('blue', 'darkest') },
	            'Contact us to talk about your growing your digital presence today.'
	          ),
	          _react2.default.createElement(
	            _scaffold.Spacer,
	            { padding: ['medium', 0, 'largest'] },
	            _react2.default.createElement(
	              _form.Form,
	              { handleSubmit: handleSubmit },
	              _react2.default.createElement(_form.FormInput, { label: 'Name', type: 'text', value: values.name, handleChange: handleChange('name'), invalidMessage: invalidMessages.name }),
	              _react2.default.createElement(_form.FormInput, { label: 'Email', type: 'text', value: values.email, handleChange: handleChange('email'), invalidMessage: invalidMessages.email }),
	              _react2.default.createElement(_form.FormTextArea, { label: 'Message', value: values.message, handleChange: handleChange('message'), invalidMessage: invalidMessages.message }),
	              _react2.default.createElement(
	                _buttons.ButtonSubmit,
	                { handleClick: handleSubmit, isDisabled: isSubmitDisabled },
	                'Send question'
	              ),
	              Boolean(statusMessage.color && statusMessage.text && statusMessage.Icon) && _react2.default.createElement(
	                _scaffold.Spacer,
	                { padding: ['medium', 0, 0] },
	                _react2.default.createElement(
	                  _scaffold.Flexer,
	                  null,
	                  function (_ref2) {
	                    var Wrapper = _ref2.Wrapper,
	                        Item = _ref2.Item;
	                    return _react2.default.createElement(
	                      Wrapper,
	                      { align: 'center' },
	                      _react2.default.createElement(
	                        Item,
	                        null,
	                        _react2.default.createElement(
	                          _scaffold.Sizer,
	                          { width: { min: '20px', max: '30px' } },
	                          _react2.default.createElement(statusMessage.Icon, { color: statusMessage.color })
	                        )
	                      ),
	                      _react2.default.createElement(
	                        Item,
	                        null,
	                        _react2.default.createElement(
	                          _scaffold.Spacer,
	                          { padding: [0, 0, 0, 'small'] },
	                          _react2.default.createElement(
	                            _headings.Text,
	                            { color: statusMessage.color },
	                            statusMessage.text
	                          )
	                        )
	                      )
	                    );
	                  }
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            _headings.HeadingTwo,
	            { color: (0, _styles.createColor)('blue') },
	            _react2.default.createElement(
	              _headings.Text,
	              { color: (0, _styles.createColor)('gray', 'light') },
	              'Other ways to'
	            ),
	            ' ',
	            _react2.default.createElement(
	              _headings.Text,
	              { weight: 700 },
	              'talk to us'
	            )
	          ),
	          _react2.default.createElement(_options2.default, { color: (0, _styles.createColor)('blue') })
	        )
	      )
	    )
	  );
	};
	
	var ServicesPage = function (_React$Component) {
	  _inherits(ServicesPage, _React$Component);
	
	  function ServicesPage() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ServicesPage);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      formStatus: 'dormant', // dormant, attempted, sending, success, error
	      name: '',
	      email: '',
	      message: ''
	    }, _this.handleChange = function (key) {
	      return function (value) {
	        var _extends2;
	
	        _this.setState(_extends({}, _this.state, (_extends2 = {}, _extends2[key] = value, _extends2)));
	      };
	    }, _this.handlePostSuccess = function () {
	
	      _this.setFormStatus('success');
	
	      // setTimeout(() => {
	      //
	      //   this.setFormStatus('dormant');
	      //   this.handleChange('name')('');
	      //   this.handleChange('email')('');
	      //   this.handleChange('message')('');
	      //
	      // }, 5000);
	    }, _this.handlePostError = function () {
	
	      _this.setFormStatus('error');
	    }, _this.createStatusMessage = function (formStatus) {
	
	      switch (formStatus) {
	
	        case 'success':
	          return {
	            color: (0, _styles.createColor)('green'),
	            text: 'Great, we will be in touch soon',
	            Icon: _icons.IconStandardTick
	          };
	
	        case 'error':
	          return {
	            color: (0, _styles.createColor)('red'),
	            text: 'Sorry, we have encountered an error. Please try again or use one of the other contact methods below',
	            Icon: _icons.IconStandardCross
	          };
	
	        case 'sending':
	          return {
	            color: (0, _styles.createColor)('blue'),
	            text: 'Sending question',
	            Icon: _icons.IconMiscLoader
	          };
	
	        default:
	          return {};
	
	      }
	    }, _this.createInvalidMessages = function () {
	      var _this$state = _this.state,
	          formStatus = _this$state.formStatus,
	          name = _this$state.name,
	          email = _this$state.email,
	          message = _this$state.message;
	
	
	      return {
	        name: !Boolean(name.trim()) && 'Please supply a contact name',
	        email: !Boolean(email.trim() && /^[^ @]+@[^ @.]{1,63}(?:\.[^ @.]{1,63})*$/.test(email)) && 'A valid Email address is required',
	        message: !Boolean(message.trim()) && 'Please supply a message'
	      };
	    }, _this.setFormStatus = function (value) {
	
	      _this.setState(_extends({}, _this.state, {
	        formStatus: value
	      }));
	    }, _this.sendDataToServer = _asyncToGenerator(function* () {
	
	      try {
	        var _this$state2 = _this.state,
	            name = _this$state2.name,
	            email = _this$state2.email,
	            message = _this$state2.message;
	
	        var endpoint = 'https://57dina5fih.execute-api.us-east-1.amazonaws.com/dev/email-contact-form-alert';
	        var config = {
	          method: 'POST',
	          mode: 'cors',
	          credentials: 'include',
	          body: JSON.stringify({ name: name, email: email, message: message }),
	          headers: new Headers({
	            'Content-type': 'text/plain'
	          })
	        };
	        var response = yield fetch(endpoint, config);
	
	        if (!response.ok) throw new Error('Post failed!');
	
	        console.log({ response: response });
	      } catch (error) {
	
	        console.log({ error: error });
	        _this.handlePostError();
	      }
	    }), _this.handleSubmit = function (e) {
	
	      var invalidMessages = _this.createInvalidMessages();
	      var isValid = !Object.keys(invalidMessages).filter(function (key) {
	        return Boolean(invalidMessages[key]);
	      }).length;
	
	      if (isValid) {
	
	        _this.setFormStatus('sending');
	        _this.sendDataToServer();
	      } else {
	
	        _this.setFormStatus('attempted');
	      }
	
	      e.preventDefault();
	    }, _this.render = function () {
	      var _this2 = _this,
	          state = _this2.state;
	      var formStatus = state.formStatus;
	
	      var isSubmitDisabled = formStatus === 'sending' || formStatus === 'success';
	      var statusMessage = _this.createStatusMessage(formStatus);
	      var invalidMessages = (formStatus === 'attempted' || formStatus === 'error') && _this.createInvalidMessages();
	
	      return _react2.default.createElement(Presentation, { handleSubmit: _this.handleSubmit, handleChange: _this.handleChange, values: state, isSubmitDisabled: isSubmitDisabled, statusMessage: statusMessage, invalidMessages: invalidMessages });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  return ServicesPage;
	}(_react2.default.Component);
	
	exports.default = ServicesPage;
	module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=component---src-pages-contact-js-9006762b88d7f4b29c64.js.map