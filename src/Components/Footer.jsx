import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RoomIcon from '@mui/icons-material/Room';

import logo from '../Components/Images/logo2.png';
import VisaIcon from '../Components/Images/pago/visa.png';
import MasterCardIcon from '../Components/Images/pago/mastercard.png';
import BitcoinIcon from '../Components/Images/pago/acpbtc.jpeg';
import PayPalIcon from '../Components/Images/pago/paypal.png';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: 'white', padding: '20px 0', marginTop: 'auto' }}>
      <Container maxWidth="lg">
      <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
  <Grid item xs={12} md={2.4}>
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      <img src={logo} alt="Meπa" style={{ width: '130px' }} />
    </Box>
  </Grid>

  <Grid item xs={12} md={2.4}>
    <Typography variant="h6" gutterBottom>
      Acerca de Nosotros
    </Typography>
    <Typography variant="body2">
      Porque nuestra Meπa es impulsarte a cumplir tus sueños.
    </Typography>
  </Grid>

  <Grid item xs={12} md={2.4}>
    <Typography variant="h6" gutterBottom>
      Métodos de Pago
    </Typography>
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
      <img src={VisaIcon} alt="Visa" style={{ width: '40px' }} />
      <img src={MasterCardIcon} alt="MasterCard" style={{ width: '40px' }} />
      <img src={PayPalIcon} alt="PayPal" style={{ width: '40px' }} />
      <img src={BitcoinIcon} alt="Bitcoin" style={{ width: '40px', borderRadius: '5px' }} />
    </Box>
    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
      Redes sociales
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
      <IconButton color="inherit" href="https://www.facebook.com/profile.php?id=61558164045743" target="_blank">
        <FacebookIcon />
      </IconButton>
      <IconButton color="inherit" href="https://www.instagram.com/academia_de_arte_educativo/" target="_blank">
        <InstagramIcon />
      </IconButton>
      <IconButton color="inherit" href="mailto:mettaacademia77@gmail.com">
        <EmailIcon />
      </IconButton>
      <IconButton color="inherit" href="https://wa.me/593983579034" target="_blank">
        <WhatsAppIcon />
      </IconButton>
    </Box>
  </Grid>

  <Grid item xs={12} md={2.4}>
    <Typography variant="h6" gutterBottom>
      Contáctanos
    </Typography>
    <Typography variant="body2">📧 mettaacademia77@gmail.com</Typography>
    <Typography variant="body2">📞 098 357 9034</Typography>
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
      <RoomIcon sx={{ mr: 1, fontSize: 18 }} />
      <a
        href="https://www.google.com/maps/place/Calle+Juan+Abel+Echeverría+y+Quito,+Latacunga"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'white', textDecoration: 'none' }}
      >
        Calle Juan Abel Echeverría y Quito, Latacunga
      </a>
    </Box>
  </Grid>

  <Grid item xs={12} md={2.4}>
    <Typography variant="h6" gutterBottom>
      Ubicación en el Mapa
    </Typography>
    <Box sx={{ borderRadius: '8px', overflow: 'hidden' }}>
      <iframe
        title="Ubicación Meπa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.545013252364!2d-78.620000!3d-0.935000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d381293f9c283d%3A0xf0e6bb5ddcad15c1!2sCalle%20Juan%20Abel%20Echeverría%20y%20Quito%2C%20Latacunga%2C%20Ecuador!5e0!3m2!1ses-419!2sec!4v1717435900000!5m2!1ses-419!2sec"
        width="100%"
        height="150"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  </Grid>
</Grid>


        <Box sx={{ borderTop: '1px solid #444', mt: 3, pt: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            &copy; 2025 Meπa.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
