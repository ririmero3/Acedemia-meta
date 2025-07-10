import React, { useEffect } from 'react';
import { Box, Typography, IconButton, Paper } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '../../Components/Images/logo2.png';

const Contactos = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '40px 20px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 600,
          width: '100%',
          padding: 4,
          textAlign: 'center',
          borderRadius: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '50px',
          }}
        >
          <img src={logo} alt="Bello Arte" style={{ width: '150px' }} />
        </Box>

        <Typography variant="h4" gutterBottom>
          Contáctanos
        </Typography>

        <Typography variant="body1" paragraph>
          Estamos para ayudarte. Puedes escribirnos, llamarnos o visitarnos.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 2 }}>
          <IconButton
            color="primary"
            aria-label="Facebook"
            component="a"
            href="https://www.facebook.com/profile.php?id=61558164045743"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="Instagram"
            component="a"
            href="https://www.instagram.com/academia_de_arte_educativo/"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="error"
            aria-label="Email"
            component="a"
            href="mailto:mettaacademia77@gmail.com"
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            color="success"
            aria-label="WhatsApp"
            component="a"
            href="https://wa.me/593983579034"
            target="_blank"
          >
            <WhatsAppIcon />
          </IconButton>
        </Box>

        <Typography variant="body1" paragraph>
          <strong>Email:</strong> mettaacademia77@gmail.com
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>WhatsApp:</strong> 098 357 9034
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
          <Typography variant="body2">
            📍 Calle Juan Abel Echeverría y Quito, junto a la pizzería D'Angelo de la Merced, Latacunga, Ecuador
          </Typography>

        </Box>
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
      </Paper>
    </Box>
  );
};

export default Contactos;
