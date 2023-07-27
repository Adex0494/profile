import styled from 'styled-components'
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';

export const Link = styled.a`
    color: inherit;
    text-decoration: none;
`

export const SkillFlex = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px
`

export const SkillLevelContainer = styled.div`
    display: flex;
    gap: 10px;
`

export const RightInnerContainer = styled.div`

`
export const StyledTypographyLink = styled(Typography)`
    margin-bottom: 20px !important;
    color: #b82424;
    border-bottom: solid 2px #b82424;
    width: fit-content;
    line-height: 1 !important;
`

export const StyledTypographySkill = styled(Typography)`
    width: fit-content;
    line-height: 1 !important;
    font-weight: bold !important;
`


export const ContentSection = styled.section`
    padding-top: 44px;
`

export const DescriptionContainer = styled.div`
    padding-left: 16px;
    padding-right: 16px;
`
export const DescriptionText = styled.div`
    flex-wrap: wrap;
`


export const LeftContainer = styled.div`
    width: 65%;
    margin-right: 24px;
`

export const RightContainer = styled.div`
    border-left: 2px solid rgba(220,220,220,0.5);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const BodySection = styled.section`
    padding-left: 64px;
    padding-right: 64px;
`

export const InnerContainer = styled.div`
    border-top: 2px solid rgba(220,220,220,0.5);
    display: flex;
`

export const StyledMailIcon = styled(MailOutlineIcon)`
    color: #b82424;
`

export const StyledPlaceIcon = styled(PlaceIcon)`
    color: #b82424;
`

export const StyledPhone = styled(PhoneIcon)`
    color: #b82424;
`

export const SubHeader = styled.section`
    margin-top: 32px;
    display: flex;
    gap: 32px;
    width: 70%;
    padding-bottom: 24px;
    justify-content: space-between;
`

export const IconTextContainer = styled.a`
    display: flex;
    gap: 12px;
    color: inherit;
    text-decoration: none;
`

export const StyledTypography = styled(Typography)`
    display: flex;
    margin-bottom: 12px !important;
`

export const BulletPointTypography = styled(Typography)`
    height: 24px;
    display: flex;
    align-items: center;
    margin-right: 4px !important;
`