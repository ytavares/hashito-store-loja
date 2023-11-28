import React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import {
  BoxContent,
  BoxImage,
  BoxItem,
  ContentContact,
} from './Content.styles';
import logo from '../../public/images/logo.png';
import '@fontsource/fredoka-one';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import 'animate.css';

export const Content = () => {
  return (
    <ContentContact>
      <Container maxWidth="xl">
        <BoxContent>
          <BoxImage className="animate__animated animate__fadeInDown animate__delay-0.2s">
            <img src={logo} alt="" />
          </BoxImage>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              fontFamily: 'Fredoka One',
              fontSize: '48px',
              lineHeight: '52px',
              color: '#FFF',
              marginTop: '40px',
            }}
            className="animate__animated animate__fadeIn animate__delay-1s"
          >
            Hashito Store
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              fontFamily: 'Fredoka One',
              fontSize: '28px',
              lineHeight: '32px',
              color: '#2b2b2b',
              marginTop: '10px',
            }}
            className="animate__animated animate__fadeIn animate__delay-1s"
          >
            Peças em resina e papelaria. Entre em contato.
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            sx={{ padding: '50px 0 100px 0' }}
          >
            <BoxItem className="animate__animated animate__fadeInDown animate__delay-1s">
              <InstagramIcon />
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontFamily: 'Fredoka One',
                  fontSize: '48px',
                  lineHeight: '52px',
                  color: '#ffa9a1',
                  marginTop: '20px',
                }}
              >
                Instagram
              </Typography>
            </BoxItem>
            <BoxItem className="animate__animated animate__fadeInDown animate__delay-2s">
              <ShoppingBagIcon />
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontFamily: 'Fredoka One',
                  fontSize: '48px',
                  lineHeight: '52px',
                  color: '#ffa9a1',
                  marginTop: '20px',
                }}
              >
                Shopee
              </Typography>
            </BoxItem>
            <BoxItem className="animate__animated animate__fadeInDown animate__delay-3s">
              <WhatsAppIcon />
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontFamily: 'Fredoka One',
                  fontSize: '48px',
                  lineHeight: '52px',
                  color: '#ffa9a1',
                  marginTop: '20px',
                }}
              >
                WhatsApp
              </Typography>
            </BoxItem>
            <BoxItem className="animate__animated animate__fadeInDown animate__delay-4s">
              <TwitterIcon />
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontFamily: 'Fredoka One',
                  fontSize: '48px',
                  lineHeight: '52px',
                  color: '#ffa9a1',
                  marginTop: '20px',
                }}
              >
                Twitter
              </Typography>
            </BoxItem>
          </Stack>
        </BoxContent>
      </Container>
    </ContentContact>
  );
};
