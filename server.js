const express = require('express');
const port = process.env.PORT || 3006;
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const backendUrl = 'https://backend.24rolls.com.ua';
const frontendUrl = 'https://24rolls.com.ua';

const app = express();
try{


  app.get('/',async(req, res, next) =>{
    const filePath = path.resolve(__dirname, 'index.html');
    const seo = await axios.get(backendUrl + '/seo/')
    const seoObj = seo.data.message.filter(el => el.name === 'Menu')[0];
    // read in the index.html file
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        console.log(err);
      }
      
      
      // replace the special strings with server generated strings
      data = data.replace(/\$DESCRIPTION/g, seoObj.description);
      data = data.replace(/\$KEYWORDS/g, seoObj.keywords);
      data = data.replace(/\$OG_TITLE/g, seoObj.title);
      data = data.replace(/\$OG_DESCRIPTION/g, seoObj.description);
      data = data.replace(/\$OG_ALT/g, seoObj.alt);
            data = data.replace(/\$OG_ROUTE/g, frontendUrl + "/") ;
      result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + seoObj.image);
      res.send(result);
    });
  });

  app.use(express.static(path.resolve(__dirname, '.')));

app.use((req, res, next) => {
        Promise.all([

          axios.get(backendUrl + '/seo/'),
          axios.get(backendUrl + '/products/filters'),
          axios.get(backendUrl + '/products/categories'),
          axios.get(backendUrl + /posts/)

        ]).then(values => {
            const seo = values[0].data.message;
            const filters = values[1].data.fils;
            const categories = values[2].data.cats;
            const posts = values[3].data;

            const mainSeo = seo.filter(el => el.name === 'Menu')[0];

            //seo
            req.mainSeo = mainSeo;

            //products
            req.categories = categories;
            req.filters = filters;
            req.posts = posts;

            next();
        })
        .catch(err => {
          console.log(err);
          throw new Error('failed loading')
        });
}); 


//menu
app.get(['/kh','/kh/'], async(req, res) =>{
  const filePath = path.resolve(__dirname, 'index.html');
  const seo = await axios.get(backendUrl + '/seo/')
  
  const seoObj = seo.data.message.filter(el => el.name === 'Kh')[0];
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      console.log(err);
    }
    
    // replace the special strings with server generated strings
    data = data.replace(/\$DESCRIPTION/g, seoObj.description);
    data = data.replace(/\$KEYWORDS/g, seoObj.keywords);
    data = data.replace(/\$OG_TITLE/g, seoObj.title);
    data = data.replace(/\$OG_DESCRIPTION/g, seoObj.description);
    data = data.replace(/\$OG_ALT/g, seoObj.alt);
    data = data.replace(/\$OG_ROUTE/g, frontendUrl + "/kh/") ;
    result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + seoObj.image);
    res.send(result);
  });
});
app.get('/dp/', async (req, res, next) =>  {
  const filePath = path.resolve(__dirname, 'index.html');
  const seo = await axios.get(backendUrl + '/seo/')
  
  const seoObj = seo.data.message.filter(el => el.name === 'Dp')[0];
  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      console.log(err);
    }
    
    // replace the special strings with server generated strings
    data = data.replace(/\$DESCRIPTION/g, seoObj.description);
    data = data.replace(/\$KEYWORDS/g, seoObj.keywords);
    data = data.replace(/\$OG_TITLE/g, seoObj.title);
    data = data.replace(/\$OG_DESCRIPTION/g, seoObj.description);
    data = data.replace(/\$OG_ALT/g, seoObj.alt);
   data = data.replace(/\$OG_ROUTE/g, frontendUrl + "/dp/") ;
    result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + seoObj.image);
    res.send(result);
  });
});
app.get( '/zp/', async (req, res, next) =>  {
  const filePath = path.resolve(__dirname, 'index.html');
  const seo = await axios.get(backendUrl + '/seo/')
  
  const seoObj = seo.data.message.filter(el => el.name === 'Zp')[0];
  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      console.log(err);
    }
    
    // replace the special strings with server generated strings
    data = data.replace(/\$DESCRIPTION/g, seoObj.description);
    data = data.replace(/\$KEYWORDS/g, seoObj.keywords);
    data = data.replace(/\$OG_TITLE/g, seoObj.title);
    data = data.replace(/\$OG_DESCRIPTION/g, seoObj.description);
    data = data.replace(/\$OG_ALT/g, seoObj.alt);
    data = data.replace(/\$OG_ROUTE/g, frontendUrl + "/zp/") ;
    result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + seoObj.image);
    res.send(result);
  });
});



//delivery
app.get(['/zp/delivery', '/dp/delivery', '/kh/delivery'], async (req, res, next) =>  {
  const filePath = path.resolve(__dirname, 'index.html');

  const seo = await axios.get(backendUrl + '/seo/')
  const seoObj = seo.filter(el => el.name === 'Delivery')[0];

  const url = req.url;
  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      console.log(err);
    }
    
    // replace the special strings with server generated strings
    data = data.replace(/\$DESCRIPTION/g, seoObj.description);
    data = data.replace(/\$KEYWORDS/g, seoObj.keywords);
    data = data.replace(/\$OG_TITLE/g, seoObj.title);
    data = data.replace(/\$OG_DESCRIPTION/g, seoObj.description);
    data = data.replace(/\$OG_ALT/g, seoObj.alt);
    data = data.replace(/\$OG_ROUTE/g, frontendUrl + url) ;
    result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + seoObj.image);
    res.send(result);
  });
});

//blog
app.get(['/zp/posts', '/dp/posts', '/kh/posts'], async (req, res, next) => {
  const filePath = path.resolve(__dirname, 'index.html');
  
  const seo = await axios.get(backendUrl + '/seo/')
  const seoObj = seo.filter(el => el.name === 'Blog')[0];

  const url = req.url;
  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      console.log(err);
    }
    
    // replace the special strings with server generated strings
    data = data.replace(/\$DESCRIPTION/g, seoObj.description);
    data = data.replace(/\$KEYWORDS/g, seoObj.keywords);
    data = data.replace(/\$OG_TITLE/g, seoObj.title);
    data = data.replace(/\$OG_DESCRIPTION/g, seoObj.description);
    data = data.replace(/\$OG_ALT/g, seoObj.alt);
    data = data.replace(/\$OG_ROUTE/g, frontendUrl + url) ;    
    result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + seoObj.image);
    res.send(result);
  });
});

//shares
app.get(['/zp/shares', '/dp/shares', '/kh/shares'], async (req, res, next) => {
  const filePath = path.resolve(__dirname, 'index.html');
  
  const seo = await axios.get(backendUrl + '/seo/')
  const seoObj = seo.filter(el => el.name === 'Actions')[0];

  const url = req.url;
  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      console.log(err);
    }
    
    // replace the special strings with server generated strings
    data = data.replace(/\$DESCRIPTION/g, seoObj.description);
    data = data.replace(/\$KEYWORDS/g, seoObj.keywords);
    data = data.replace(/\$OG_TITLE/g, seoObj.title);
    data = data.replace(/\$OG_DESCRIPTION/g, seoObj.description);
    data = data.replace(/\$OG_ALT/g, seoObj.alt);
    data = data.replace(/\$OG_ROUTE/g, frontendUrl + url) ;
    result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + seoObj.image);
    res.send(result);
  });
});

//contacts
app.get(['/zp/about-us', '/dp/about-us', '/kh/about-us'], async (req, res, next) =>  {
  const filePath = path.resolve(__dirname, 'index.html');
  
  const seo = await axios.get(backendUrl + '/seo/')
  const seoObj = seo.filter(el => el.name === 'Contacts')[0];

  const url = req.url;
  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      console.log(err);
    }
    
    // replace the special strings with server generated strings
    data = data.replace(/\$DESCRIPTION/g, seoObj.description);
    data = data.replace(/\$KEYWORDS/g, seoObj.keywords);
    data = data.replace(/\$OG_TITLE/g, seoObj.title);
    data = data.replace(/\$OG_DESCRIPTION/g, seoObj.description);
    data = data.replace(/\$OG_ALT/g, seoObj.alt);
    data = data.replace(/\$OG_ROUTE/g, frontendUrl + url ) ;
    result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + seoObj.image);
    res.send(result);
  });
});

//products
app.get('/kh/:routeCat/:routeProd', 
async (req, res, next) =>  {
  const filePath = path.resolve(__dirname, 'index.html');
  const prods =  await axios.get(backendUrl + '/products/');
  const products = prods.data.message;
  const url = req.url;
  const routeCat = req.params.routeCat;
  const routeProd = req.params.routeProd;
  const product = products.filter(el => {
    return el.route === routeProd && el.categoryId.route === routeCat
  })[0];

  if (!product) {
    next();
  } else {
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      
      // replace the special strings with server generated strings
      data = data.replace(/\$DESCRIPTION/g, product.seo_description || "24rolls");
      data = data.replace(/\$KEYWORDS/g, product.seo_keywords || "24rolls");
      data = data.replace(/\$OG_TITLE/g, product.seo_title || "24rolls");
      data = data.replace(/\$OG_DESCRIPTION/g, product.seo_description || "24rolls");
          data = data.replace(/\$OG_ROUTE/g, frontendUrl + url) ;    
      data = data.replace(/\$OG_ALT/g, product.alt);
      result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + product.image);
      res.send(result);
    });
  }
});

app.get('/zp/:routeCat/:routeProd', 
async (req, res, next) =>  {
  const filePath = path.resolve(__dirname, 'index.html');
  const prods =  await axios.get(backendUrl + '/products/');
  const products = prods.data.message;
const url = req.url;
  const routeCat = req.params.routeCat;
  const routeProd = req.params.routeProd;
  const product = products.filter(el => {
    return el.route === routeProd && el.categoryId.route === routeCat
  })[0];

  if (!product) {
    next();
  } else {
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      
      // replace the special strings with server generated strings
      data = data.replace(/\$DESCRIPTION/g, product.seo_description_zp || "24rolls");
      data = data.replace(/\$KEYWORDS/g, product.seo_keywords_zp || "24rolls");
      data = data.replace(/\$OG_TITLE/g, product.seo_title_zp || "24rolls");
      data = data.replace(/\$OG_DESCRIPTION/g, product.seo_description_zp || "24rolls");
      data = data.replace(/\$OG_ALT/g, product.alt);
      data = data.replace(/\$OG_ROUTE/g, frontendUrl + url) ;    
      result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + product.image);
      res.send(result);
    });
  }
});

app.get('/dp/:routeCat/:routeProd', 
async (req, res, next) =>  {
  const filePath = path.resolve(__dirname, 'index.html');
  const prods =  await axios.get(backendUrl + '/products/');
  const products = prods.data.message;
const url = req.url;
  const routeCat = req.params.routeCat;
  const routeProd = req.params.routeProd;
  const product = products.filter(el => {
    return el.route === routeProd && el.categoryId.route === routeCat
  })[0];

  if (!product) {
    next();
  } else {
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      
      // replace the special strings with server generated strings
      data = data.replace(/\$DESCRIPTION/g, product.seo_description_dp || "24rolls");
      data = data.replace(/\$KEYWORDS/g, product.seo_keywords_dp || "24rolls");
      data = data.replace(/\$OG_TITLE/g, product.seo_title_dp || "24rolls");
      data = data.replace(/\$OG_DESCRIPTION/g, product.seo_description_dp || "24rolls");
          data = data.replace(/\$OG_ROUTE/g, frontendUrl + url) ;    
      data = data.replace(/\$OG_ALT/g, product.alt);
      result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + product.image);
      res.send(result);
    });
  }
});


//filters
app.get(['/zp/:routeFil', '/dp/:routeFil', '/kh/:routeFil'], (req, res, next) => {
  const filePath = path.resolve(__dirname, 'index.html');
  const filters = req.filters;
  const routeCat = req.params.routeFil;
  const url = req.url;
  const filter = filters.filter(el => el.route === routeCat)[0];

  if (!filter) {
    next();
  } else {
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        console.log(err);
      }
      
      // replace the special strings with server generated strings
      data = data.replace(/\$DESCRIPTION/g, filter.seo_description);
      data = data.replace(/\$KEYWORDS/g, filter.seo_keywords);
      data = data.replace(/\$OG_TITLE/g, filter.seo_title);
      data = data.replace(/\$OG_DESCRIPTION/g, filter.seo_description);
      data = data.replace(/\$OG_ALT/g, filter.alt);
      data = data.replace(/\$OG_ROUTE/g, frontendUrl + url) ;      
      result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + filter.image);
      res.send(result);
    });
  }
});

//categories
app.get('/zp/:routeCat', (req, res, next) => {
  const filePath = path.resolve(__dirname, 'index.html');
  const categories = req.categories;
  const routeCat = req.params.routeCat;
  const url = req.url;
  const category = categories.filter(el => el.route === routeCat)[0];

  if (!category) {
    next();
  } else {
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        console.log(err);
      }
      
      // replace the special strings with server generated strings
      data = data.replace(/\$DESCRIPTION/g, category.seo_description_zp|| "24rolls");
      data = data.replace(/\$KEYWORDS/g, category.seo_keywords_zp|| "24rolls");
      data = data.replace(/\$OG_TITLE/g, category.seo_title_zp|| "24rolls");
      data = data.replace(/\$OG_DESCRIPTION/g, category.seo_description_zp || "24rolls");
      data = data.replace(/\$OG_ALT/g, category.alt);
      data = data.replace(/\$OG_ROUTE/g, frontendUrl + url) ;    

      result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + category.seo_image || " ");
      res.send(result);
    });
  }
});
app.get( '/kh/:routeCat', (req, res, next) => {
  const filePath = path.resolve(__dirname, 'index.html');
  const categories = req.categories;
  const routeCat = req.params.routeCat;
  
  const url = req.url;
  const category = categories.filter(el => el.route === routeCat)[0];

  if (!category) {
    next();
  } else {
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        console.log(err);
      }
      
      // replace the special strings with server generated strings
      data = data.replace(/\$DESCRIPTION/g, category.seo_description);
      data = data.replace(/\$KEYWORDS/g, category.seo_keywords);
      data = data.replace(/\$OG_TITLE/g, category.seo_title);
      data = data.replace(/\$OG_DESCRIPTION/g, category.seo_description);
      data = data.replace(/\$OG_ALT/g, category.alt);
          data = data.replace(/\$OG_ROUTE/g, frontendUrl + url) ;    
      result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + category.seo_image || " ");
      res.send(result);
    });
  }
});
app.get('/dp/:routeCat', (req, res, next) => {
  const filePath = path.resolve(__dirname, 'index.html');
  const categories = req.categories;
  const routeCat = req.params.routeCat;
  const url = req.url;
  const category = categories.filter(el => el.route === routeCat)[0];

  if (!category) {
    next();
  } else {
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        console.log(err);
      }
      
      // replace the special strings with server generated strings
      data = data.replace(/\$DESCRIPTION/g, category.seo_description_dp|| "24rolls");
      data = data.replace(/\$KEYWORDS/g, category.seo_keywords_dp|| "24rolls");
      data = data.replace(/\$OG_TITLE/g, category.seo_title_dp|| "24rolls");
      data = data.replace(/\$OG_DESCRIPTION/g, category.seo_description_dp)|| "24rolls";
      data = data.replace(/\$OG_ALT/g, category.alt);
      data = data.replace(/\$OG_ROUTE/g, frontendUrl + url) ;      
      result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + category.seo_image || " ");
      res.send(result);
    });
  }
});

//posts
app.get(['/zp/posts/:postRoute', '/dp/posts/:postRoute', '/kh/posts/:postRoute'], (req, res, next) => {
  const filePath = path.resolve(__dirname, 'index.html');
  const posts = req.posts;
  const postRoute = req.params.postRoute;
  const url = req.url;
  const post = posts.filter(el => el.route === postRoute)[0];

  if (!post) {
    next();
  } else {
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        console.log(err);
      }
      
      // replace the special strings with server generated strings
      data = data.replace(/\$DESCRIPTION/g, post.seo_description);
      data = data.replace(/\$KEYWORDS/g, post.seo_keywords);
      data = data.replace(/\$OG_TITLE/g, post.seo_title);
      data = data.replace(/\$OG_DESCRIPTION/g, post.seo_description);
      data = data.replace(/\$OG_ALT/g, post.alt);
    data = data.replace(/\$OG_ROUTE/g, frontendUrl + url) ;      
result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + post.image);
      res.send(result);
    });
  }
});


app.use(express.static(path.resolve(__dirname, '.')));


app.get('*', function(req, res) {

  const mainSeo = req.mainSeo;
  console.log("last");
  const url = req.url;
  const filePath = path.resolve(__dirname, 'index.html');
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      console.log(err);
    }
    
    // replace the special strings with server generated strings
    data = data.replace(/\$DESCRIPTION/g, mainSeo.description);
    data = data.replace(/\$KEYWORDS/g, mainSeo.keywords);
    data = data.replace(/\$OG_TITLE/g, mainSeo.title);
    data = data.replace(/\$OG_DESCRIPTION/g, mainSeo.description);
    data = data.replace(/\$OG_ALT/g, mainSeo.alt);
    data = data.replace(/\$OG_ROUTE/g, frontendUrl + url) ;
    result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + mainSeo.image);
    res.send(result);
  });
});
app.listen(port, () => console.log(`Listening on port ${port}`));
}
catch(err){
  console.log(err)
}
