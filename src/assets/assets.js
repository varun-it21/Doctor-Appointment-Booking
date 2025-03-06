import add_icon from './add_icon.svg'
import admin_logo from './admin_logo.svg'
import appointment_icon from './appointment_icon.svg'
import cancel_icon from './cancel_icon.svg'
import doctor_icon from './doctor_icon.svg'
import home_icon from './home_icon.svg'
import people_icon from './people_icon.svg'
import upload_area from './upload_area.svg'
import list_icon from './list_icon.svg'
import tick_icon from './tick_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import patients_icon from './patients_icon.svg'
import logo from './logo.png'
import profile_pic from './profile_pic.png'
import dropdown_icon from './dropdown_icon.svg'
import group_profiles from './group_profiles.png'
import arrow_icon from './arrow_icon.svg'
import header_img from './header_img.png'
import General_physician from '../assets/general_physician.svg';
import Gynecologist from '../assets/gynecologist.svg';
import Dermatologist from '../assets/dermatologist.svg';
import Pediatricians from '../assets/pediatricians.svg';
import Neurologist from '../assets/neurologist.svg';
import Gastroenterologist from '../assets/gastroenterologist.svg';
import doc1 from '../assets/doc1.png'
import doc2 from '../assets/doc2.png';
import doc3 from '../assets/doc3.png';
import doc4 from '../assets/doc4.png';
import doc5 from '../assets/doc5.png';
import doc6 from '../assets/doc6.png';
import doc7 from '../assets/doc7.png';
import doc8 from '../assets/doc8.png';
import doc9 from '../assets/doc9.png';
import doc10 from '../assets/doc10.png';
import doc11 from '../assets/doc11.png';
import doc12 from '../assets/doc12.png';
import doc13 from '../assets/doc13.png';
import doc14 from '../assets/doc14.png';
import doc15 from '../assets/doc15.png';
import appointment_img from '../assets/appointment_img.png';
import verified_icon from '../assets/verified_icon.svg';
import info_icon from '../assets/info_icon.svg';
import about_image from '../assets/about_image.png';
import contact_image from '../assets/contact_image.png';
import menu_icon from '../assets/menu_icon.svg';
import cross_icon from '../assets/cross_icon.png';

export const assets = {
    logo,
    profile_pic,
    dropdown_icon,
    group_profiles,
    arrow_icon,
    header_img,
    add_icon,
    admin_logo,
    appointment_icon,
    cancel_icon,
    doctor_icon,
    upload_area,
    home_icon,
    patients_icon,
    people_icon,
    list_icon,
    tick_icon,
    appointments_icon,
    logo,
    earning_icon,
    doc1,
    doc2,
    doc3,
    doc4,
    doc5,
    doc6,
    doc7,
    doc8,
    doc9,
    doc10,
    doc11,
    doc12,
    doc13,
    doc14,
    doc15,
    appointment_img,
    verified_icon,
    info_icon,
    about_image,
    contact_image,
    menu_icon,
    cross_icon



}

export const specialtyData = [
    {
        speciality: 'General Physician',
        image: General_physician, // Ensure the image is imported correctly
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist, // Ensure the image is imported correctly
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist, // Ensure the image is imported correctly
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians, // Ensure the image is imported correctly
    },
    {
        speciality: 'Neurologist',
        image: Neurologist, // Ensure the image is imported correctly
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist,
    }
];

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr.Richard James',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Richard James is a highly skilled General Physician known for his expertise in diagnosing and treating a wide range of medical conditions. He emphasizes preventive healthcare and patient education to ensure long-term well-being. With a compassionate approach, he takes time to understand patients’ concerns and provide personalized treatment. His experience includes managing chronic diseases, acute illnesses, and routine check-ups.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Carter',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD',
        experience: '7 Years',
        about: 'Dr. Emily Carter specializes in women’s health, offering expert care in pregnancy, reproductive health, and hormonal imbalances. She is dedicated to providing comprehensive prenatal care and guiding women through all stages of motherhood. She also focuses on preventive screenings, menopause management, and minimally invasive gynecological procedures. Her patient-centered approach ensures comfort and trust in every consultation.',
        fees: 70,
        address: {
            line1: 'Park Street, Manhattan',
            line2: 'New York, USA'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Thompson',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '6 Years',
        about: 'Dr. Sarah Thompson is a board-certified Dermatologist specializing in medical, surgical, and cosmetic skin treatments. She has extensive experience in treating acne, eczema, psoriasis, and other skin conditions. She also provides advanced cosmetic procedures, including anti-aging treatments and laser therapy. Her approach combines scientific knowledge with personalized skincare recommendations to enhance skin health and confidence.',
        fees: 65,
        address: {
            line1: 'Baker Street',
            line2: 'London, UK'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. William Anderson',
        image: doc4, 
        speciality: 'Pediatricians', 
        degree: 'MBBS, MD (Pediatrics)', 
        experience: '8 Years', 
        about: 'Dr. William Anderson is a dedicated Pediatrician with expertise in child healthcare, including growth monitoring, vaccinations, and disease prevention. He has a warm and friendly approach, ensuring children feel comfortable during consultations. His focus is on early diagnosis and treatment of childhood illnesses to promote healthy development. He also provides guidance to parents on nutrition, immunization, and behavioral concerns.',
        fees: 55, 
        address: { 
            line1: 'Oakwood Avenue', 
            line2: 'Sydney, Australia' 
        }
    },
    {
        _id: 'doc5', 
        name: 'Dr. Henry Wilson', 
        image: doc5, 
        speciality: 'Neurologist', 
        degree: 'MBBS, DM (Neurology)', 
        experience: '10 Years', 
        about: 'Dr. Henry Wilson is a highly experienced Neurologist specializing in diagnosing and managing disorders of the nervous system. He treats conditions such as migraines, epilepsy, multiple sclerosis, and neurodegenerative diseases. He believes in a patient-centered approach and works closely with families to provide comprehensive neurological care. His focus is on advanced diagnostic techniques and the latest treatment modalities to improve patients’ quality of life.',
        fees: 80, 
        address: { 
            line1: 'Main Street', 
            line2: 'Toronto, Canada' 
        } 
    },
    {
        _id: 'doc6', 
        name: 'Dr. Olivia Martinez', 
        image: doc6, 
        speciality: 'Gastroenterologist', 
        degree: 'MBBS, DM (Gastroenterology)', 
        experience: '11 Years', 
        about: 'Dr. Olivia Martinez is an expert in digestive health, treating conditions such as acid reflux, irritable bowel syndrome, and liver diseases. She emphasizes dietary and lifestyle changes along with medical treatments to achieve optimal gut health. She specializes in endoscopic procedures for accurate diagnosis and treatment of gastrointestinal disorders. Her patient-focused approach ensures compassionate care with a strong emphasis on preventive strategies.',
        fees: 85, 
        address: { 
            line1: 'Ocean Drive', 
            line2: 'Miami, USA' 
        } 
    },
    {
        _id: 'doc7', 
        name: 'Dr. Daniel White', 
        image: doc7, 
        speciality: 'General Physician', 
        degree: 'MBBS', 
        experience: '9 Years', 
        about: 'Dr. Daniel White has extensive experience in managing acute and chronic medical conditions, focusing on preventive healthcare. His expertise includes diabetes, hypertension, respiratory illnesses, and routine health check-ups. He takes a holistic approach to patient care, ensuring proper diagnosis, treatment, and follow-up. His warm demeanor and excellent communication skills make him a trusted healthcare provider.',
        fees: 60, 
        address: { 
            line1: 'Sunset Boulevard', 
            line2: 'California, USA' 
        } 
    },
    {
        _id: 'doc8', 
        name: 'Dr. Jessica Brown', 
        image: doc8, 
        speciality: 'Gynecologist', 
        degree: 'MBBS, MD', 
        experience: '12 Years', 
        about: 'Dr. Jessica Brown specializes in obstetrics and gynecology, with a focus on reproductive health and family planning. She provides expert care in infertility treatments, pregnancy management, and gynecological surgeries. She also emphasizes patient education and preventive care for long-term well-being. Her empathetic nature helps patients feel at ease throughout their healthcare journey.',
        fees: 75, 
        address: { 
            line1: 'Central Park', 
            line2: 'New York, USA' 
        } 
    },
    {
        _id: 'doc9', 
        name: 'Dr. David Clark', 
        image: doc9, 
        speciality: 'Dermatologist', 
        degree: 'MBBS, MD (Dermatology)', 
        experience: '8 Years', 
        about: 'Dr. David Clark is an experienced dermatologist specializing in diagnosing and treating skin conditions such as acne, eczema, and rosacea. He also performs advanced procedures for cosmetic dermatology, including laser treatments and chemical peels. His expertise extends to skin cancer detection and mole removal. He focuses on providing personalized skincare routines to help patients maintain healthy and radiant skin.',
        fees: 70, 
        address: { 
            line1: 'Elm Street', 
            line2: 'Chicago, USA' 
        } 
    },
    {
        _id: 'doc10', 
        name: 'Dr. Laura Scott', 
        image: doc10, 
        speciality: 'Pediatricians', 
        degree: 'MBBS, MD (Pediatrics)', 
        experience: '10 Years', 
        about: 'Dr. Laura Scott is a compassionate pediatrician committed to providing high-quality care for infants, children, and adolescents. She specializes in routine wellness check-ups, vaccinations, and treating childhood illnesses. She also offers guidance on nutrition and developmental milestones. Her friendly and warm approach makes her a favorite among young patients and parents alike.',
        fees: 65, 
        address: { 
            line1: 'Greenwood Lane', 
            line2: 'Boston, USA' 
        } 
    },
    {
        _id: 'doc11', 
        name: 'Dr. Michael Harris', 
        image: doc11, 
        speciality: 'Neurologist', 
        degree: 'MBBS, DM (Neurology)', 
        experience: '9 Years', 
        about: 'Dr. Michael Harris is a dedicated neurologist with expertise in treating conditions such as epilepsy, migraines, Parkinson’s disease, and stroke management. He stays updated with the latest advancements in neurology to provide cutting-edge treatments. He focuses on patient education and lifestyle modifications to enhance neurological health. His diagnostic precision and personalized care ensure the best outcomes for his patients.',
        fees: 90, 
        address: { 
            line1: 'King’s Road', 
            line2: 'Birmingham, UK' 
        } 
    },
    {
        _id: 'doc12', 
        name: 'Dr. Amanda Taylor', 
        image: doc12, 
        speciality: 'Gastroenterologist', 
        degree: 'MBBS, DM (Gastroenterology)', 
        experience: '10 Years', 
        about: 'Dr. Amanda Taylor is an expert in digestive health, specializing in conditions such as acid reflux, liver disorders, and gastrointestinal infections. She emphasizes a balanced diet and lifestyle changes to support gut health. She performs diagnostic procedures like endoscopy and colonoscopy to detect digestive issues early. Her patient-centric approach ensures comfort and trust throughout treatment.',
        fees: 85, 
        address: { 
            line1: 'Maple Street', 
            line2: 'Melbourne, Australia' 
        } 
    },
    {
        _id: 'doc13', 
        name: 'Dr. Ryan Johnson', 
        image: doc13, 
        speciality: 'General Physician', 
        degree: 'MBBS', 
        experience: '7 Years', 
        about: 'Dr. Ryan Johnson is a skilled general physician with expertise in diagnosing and managing a wide range of health conditions. He provides routine check-ups, chronic disease management, and preventive healthcare advice. His focus on patient education empowers individuals to make informed health choices. His approachable manner and thorough consultations make him highly trusted among his patients.',
        fees: 50, 
        address: { 
            line1: 'Victoria Avenue', 
            line2: 'Toronto, Canada' 
        } 
    },
    {
        _id: 'doc14', 
        name: 'Dr. Sophia Wilson', 
        image: doc14, 
        speciality: 'Gynecologist', 
        degree: 'MBBS, MD', 
        experience: '9 Years', 
        about: 'Dr. Sophia Wilson is a highly regarded gynecologist who specializes in women’s reproductive health, prenatal care, and hormonal treatments. She offers expert advice on contraception, menopause, and fertility issues. She provides a supportive and comfortable environment for patients to discuss their concerns. Her holistic approach ensures the best care for women at all life stages.',
        fees: 95, 
        address: { 
            line1: 'Central Park Road', 
            line2: 'New York, USA' 
        } 
    },
    {
        _id: 'doc15', 
        name: 'Dr. Benjamin Carter', 
        image: doc15, 
        speciality: 'Dermatologist', 
        degree: 'MBBS, MD (Dermatology)', 
        experience: '8 Years', 
        about: 'Dr. Benjamin Carter is a dermatologist specializing in both medical and cosmetic skin treatments. He has expertise in treating acne, pigmentation disorders, and chronic skin conditions. He also offers laser therapy, anti-aging treatments, and skincare consultations. His patient-centered approach ensures that every individual receives personalized treatment to achieve healthy and glowing skin.',
        fees: 80, 
        address: { 
            line1: 'Broadway Avenue', 
            line2: 'San Francisco, USA' 
        } 
    }
    
    
];
