import React, { useState, useEffect } from 'react';

// --- ÍCONES INLINE ---
const IconCheckCircle2 = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>;
const IconCircle = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/></svg>;
const IconQrCode = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3v5h3v-5z"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>;
const IconCopy = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>;
const IconShieldCheck = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>;
const IconUser = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconLogOut = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>;
const IconCheck = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"/></svg>;
const IconSparkles = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>;
const IconLock = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
const IconX = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
const IconAlertCircle = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>;
const IconClock = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IconDownload = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>;
const IconTrendingUp = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
const IconBarChart = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>;
const IconPieChart = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>;
const IconFilter = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>;
const IconTarget = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const IconSearch = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
const IconUpload = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>;
const IconPaperclip = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>;
const IconTrash = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>;

// --- CONFIGURAÇÃO FIREBASE ---
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithCustomToken, signInAnonymously, GoogleAuthProvider, signInWithPopup, signOut, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, onSnapshot, updateDoc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD1BfLrYbIf9UhapJA8Eu8O_AEY2Bzx4Lk",
  authDomain: "app-terceirao.firebaseapp.com",
  projectId: "app-terceirao",
  storageBucket: "app-terceirao.firebasestorage.app",
  messagingSenderId: "695228920939",
  appId: "1:695228920939:web:aaca89bcdf201e8a1a6d2e",
  measurementId: "G-N0B31D7PJX"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// --- CONFIGURAÇÃO DO PIX ---
const MEU_PIX_COPIA_E_COLA = "00020126580014br.gov.bcb.pix0136[SUA_CHAVE_AQUI]5204000053039865802BR5913SEU NOME AQUI6009SAO PAULO62070503***6304E2D3";
const PIX_1_A_4 = "00020126580014BR.GOV.BCB.PIX013635951200-42ae-4cd8-98df-cda3e7471d995204000053039865406100.005802BR5924Joana D'Arc Lopes Coelho6009SAO PAULO6214051048Yd5jlZB16304FFD8";
const PIX_5_A_8 = "00020126580014BR.GOV.BCB.PIX013635951200-42ae-4cd8-98df-cda3e7471d995204000053039865406125.005802BR5924Joana D'Arc Lopes Coelho6009SAO PAULO62140510VwbEu1ptPr63043342";

// LINKS DAS IMAGENS PNG
const URL_DA_SUA_LOGO_CARNE = "https://i.imgur.com/yxlAsvl.png"; 
const URL_DA_LOGO_TERCEIRAO = "https://i.imgur.com/hMk1pfb.png";

// --- CONFIGURAÇÃO API GEMINI ---
const generateGeminiContent = async (prompt) => {
  const apiKey = "";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
  const payload = { contents: [{ parts: [{ text: prompt }] }] };

  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error('Erro na API');
      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "Erro ao gerar texto.";
    } catch (err) {
      if (attempt === 5) return "Serviço temporariamente indisponível.";
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
    }
  }
};

// --- ELEMENTOS VISUAIS DE IDENTIDADE ---
const BackgroundIdentity = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <svg className="absolute -top-10 -left-10 w-80 h-80 text-[#C41E1E] opacity-20" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M0,0 L200,0 M0,0 L180,70 M0,0 L140,140 M0,0 L70,180 M0,0 L0,200" />
      <path d="M40,0 Q35,15 36,14 Q25,25 28,28 Q15,35 0,40" />
      <path d="M80,0 Q75,30 72,28 Q50,50 56,56 Q30,75 0,80" />
      <path d="M120,0 Q115,45 108,42 Q75,75 84,84 Q45,115 0,120" />
    </svg>
    <svg className="absolute -top-10 -right-10 w-96 h-96 text-black opacity-[0.05] transform scale-x-[-1]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M0,0 L200,0 M0,0 L180,70 M0,0 L140,140 M0,0 L70,180 M0,0 L0,200" />
      <path d="M40,0 Q35,15 36,14 Q25,25 28,28 Q15,35 0,40" />
      <path d="M80,0 Q75,30 72,28 Q50,50 56,56 Q30,75 0,80" />
    </svg>
    <div className="absolute top-[12%] left-[10%] text-[#C41E1E] text-4xl opacity-30 animate-pulse">✦</div>
    <div className="absolute bottom-[20%] right-[8%] text-black text-2xl opacity-20">✦</div>
  </div>
);

export default function App() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);
  const [installments, setInstallments] = useState([]);
  const [userNameInput, setUserNameInput] = useState('');
  const [userClassInput, setUserClassInput] = useState('');
  const [selectedPaymentMonth, setSelectedPaymentMonth] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminForm, setAdminForm] = useState({ user: '', pass: '' });
  const [adminError, setAdminError] = useState('');
  const [profileError, setProfileError] = useState('');
  const [reminderData, setReminderData] = useState(null);
  const [motivationData, setMotivationData] = useState({ loading: false, text: null });
  const [classSummary, setClassSummary] = useState({ loading: false, text: null });
  
  const [showCelebration, setShowCelebration] = useState(false);
  const [lastCompletedGoal, setLastCompletedGoal] = useState(null);
  
  const [filterClass, setFilterClass] = useState('Todas as Turmas');
  const [searchQuery, setSearchQuery] = useState(''); 
  const [adminManageInst, setAdminManageInst] = useState(null); 
  const [studentToDelete, setStudentToDelete] = useState(null); // NOVO ESTADO: Confirmação de exclusão de aluno

  const monthData = {
    1: { name: 'Abril', value: 100 },
    2: { name: 'Maio', value: 100 },
    3: { name: 'Junho', value: 100 },
    4: { name: 'Julho', value: 100 },
    5: { name: 'Agosto', value: 125 },
    6: { name: 'Setembro', value: 125 },
    7: { name: 'Outubro', value: 125 },
    8: { name: 'Novembro', value: 125 }
  };

  const partyGoals = [
    { value: 5000, label: 'Chácara', icon: '🏡' },
    { value: 6700, label: 'Buffet', icon: '🍽️' },
    { value: 10200, label: 'Decoração', icon: '🎈' }, 
    { value: 14200, label: 'Open Bar', icon: '🍻' }, 
    { value: 40000, label: 'Meta Final do Baile', icon: '🎓' }
  ];

  const getCurrentPixCode = () => {
    if (!selectedPaymentMonth) return "";
    return selectedPaymentMonth <= 4 ? PIX_1_A_4 : PIX_5_A_8;
  };

  const currentPixCode = getCurrentPixCode();
  const qrCodeUrl = currentPixCode ? `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(currentPixCode)}` : "";

  useEffect(() => {
    const initAuth = async () => {
      try {
        await setPersistence(auth, browserLocalPersistence);
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          try {
            await signInWithCustomToken(auth, __initial_auth_token);
          } catch (tokenError) {
            await signInAnonymously(auth);
          }
        } else {
          await signInAnonymously(auth);
        }
      } catch (error) {
        console.error("Erro na autenticação:", error);
      }
    };
    initAuth();
    
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        if (currentUser.displayName && !userNameInput) setUserNameInput(currentUser.displayName);
      } else {
          try {
             await signInAnonymously(auth);
          } catch(e) {
             console.error("Failed to sign in anonymously", e);
          }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const usersRef = collection(db, 'artifacts', appId, 'public', 'data', 'client_users');
    const unsubUsers = onSnapshot(usersRef, (snapshot) => {
      const uList = [];
      snapshot.forEach(doc => uList.push({ id: doc.id, ...doc.data() }));
      setUsersList(uList);
    }, (err) => console.error(err));

    const installmentsRef = collection(db, 'artifacts', appId, 'public', 'data', 'installments');
    const unsubInstallments = onSnapshot(installmentsRef, (snapshot) => {
      const instList = [];
      let currentTotal = 0;
      snapshot.forEach(doc => {
          const data = doc.data();
          instList.push({ id: doc.id, ...data });
          if(data.status === 'paid' && monthData[data.month]) {
              currentTotal += monthData[data.month].value;
          }
      });
      setInstallments(instList);
      
      const achievedGoals = partyGoals.filter(g => currentTotal >= g.value).map(g => g.value);
      const currentHighestGoal = achievedGoals.length > 0 ? Math.max(...achievedGoals) : null;
      
      if (lastCompletedGoal !== null && currentHighestGoal !== null && currentHighestGoal > lastCompletedGoal) {
          setShowCelebration(true);
          setTimeout(fireEpicConfetti, 500); 
          setTimeout(() => setShowCelebration(false), 9000); 
      }
      
      if (currentHighestGoal !== null) {
          setLastCompletedGoal(currentHighestGoal);
      } else if (lastCompletedGoal === null && currentTotal > 0) {
          setLastCompletedGoal(currentHighestGoal || 0);
      }

    }, (err) => console.error(err));

    return () => { unsubUsers(); unsubInstallments(); };
  }, [user, lastCompletedGoal]);

  const handleGoogleLogin = async () => {
    try {
      setLoginError('');
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) { 
      console.error("Erro detalhado do Google:", error);
      if (error.code === 'auth/popup-closed-by-user') {
        setLoginError("O pop-up de login foi fechado antes de concluir.");
      } else if (error.code === 'auth/unauthorized-domain') {
        setLoginError("Domínio não autorizado. Adicione este link no Firebase.");
      } else {
        setLoginError("Bloqueio de segurança detectado. Abra o site numa NOVA ABA (botão no canto superior direito) para fazer login.");
      }
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    window.location.reload();
  };

  const handleSaveProfile = async (e) => {
    if (e) e.preventDefault();
    setProfileError('');
    
    if (!userNameInput.trim() || !userClassInput) {
      setProfileError('Por favor, preencha o seu nome e selecione a turma.');
      return;
    }
    
    if (!user) return;
    
    try {
      const userDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'client_users', user.uid);
      await setDoc(userDocRef, { 
        name: userNameInput.trim(), 
        class: userClassInput,
        email: user.email || '', 
        photoURL: user.photoURL || '',
        createdAt: new Date().toISOString() 
      }, { merge: true });
    } catch (error) { 
      setProfileError('Erro ao guardar os dados. Tente novamente.');
      console.error(error); 
    }
  };

  const handleAdminSubmit = (e) => {
    if (e) e.preventDefault();
    
    const safeUser = (adminForm.user || '').trim().toLowerCase();
    const safePass = (adminForm.pass || '').trim();
    
    if (!safeUser || !safePass) {
      setAdminError('Preencha todos os campos para entrar.');
      return;
    }
    
    const isMelga = safeUser === 'melga' && safePass === '174700';
    const isBufus = safeUser === 'bufus' && safePass === '2402';
    const isUaijuana = safeUser === 'uaijuana' && safePass === 'joanalinda';
    
    if (isMelga || isBufus || isUaijuana) {
      setIsAdmin(true);
      setShowAdminModal(false);
      setAdminForm({ user: '', pass: '' });
      setAdminError('');
    } else { 
      setAdminError('Utilizador ou palavra-passe incorretos.'); 
    }
  };

  const confirmDeleteStudent = async () => {
    if (!studentToDelete) return;
    try {
      // 1. Apaga as parcelas do aluno para manter o banco de dados limpo
      const instsToDelete = installments.filter(i => i.userId === studentToDelete.id);
      for (const inst of instsToDelete) {
        await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'installments', inst.id));
      }
      // 2. Apaga o perfil do aluno
      await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'client_users', studentToDelete.id));
      
      setStudentToDelete(null);
    } catch (error) {
      console.error("Erro ao apagar aluno:", error);
    }
  };

  const fireConfetti = () => {
    const triggerConfetti = () => {
      window.confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#C41E1E', '#000000', '#F59E0B'], zIndex: 9999 });
    };

    if (!window.confetti) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js';
      script.onload = triggerConfetti;
      document.body.appendChild(script);
    } else {
      triggerConfetti();
    }
  };

  const fireEpicConfetti = () => {
      const duration = 8 * 1000;
      const animationEnd = Date.now() + duration;
      const colors = ['#C41E1E', '#000000', '#F59E0B', '#FFFFFF', '#FFD700'];

      const triggerEpic = () => {
          const interval = setInterval(function() {
              const timeLeft = animationEnd - Date.now();
              if (timeLeft <= 0) { return clearInterval(interval); }
              
              const particleCount = 60 * (timeLeft / duration);
              
              window.confetti({
                  particleCount,
                  angle: 60,
                  spread: 80,
                  origin: { x: 0, y: Math.random() * 0.8 },
                  colors: colors,
                  zIndex: 9999999
              });
              window.confetti({
                  particleCount,
                  angle: 120,
                  spread: 80,
                  origin: { x: 1, y: Math.random() * 0.8 },
                  colors: colors,
                  zIndex: 9999999
              });
              if(Math.random() > 0.4){
                  window.confetti({
                      particleCount: 100,
                      spread: 140,
                      startVelocity: 60,
                      origin: { x: Math.random(), y: 0 },
                      colors: colors,
                      zIndex: 9999999
                  });
              }
          }, 350);
      };
      
      if (!window.confetti) {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js';
          script.onload = triggerEpic;
          document.body.appendChild(script);
      } else {
          triggerEpic();
      }
  };

  const updateAdminInstStatus = async (newStatus) => {
    const { client, month, inst } = adminManageInst;
    const targetInstId = inst?.id || `${client.id}_month_${month}`;
    try {
        const instRef = doc(db, 'artifacts', appId, 'public', 'data', 'installments', targetInstId);
        await setDoc(instRef, {
            userId: client.id,
            userName: client.name,
            month: month,
            status: newStatus
        }, { merge: true });

        if (newStatus === 'paid' && inst?.status !== 'paid') {
            fireConfetti();
        }

        setAdminManageInst(prev => ({...prev, inst: {...prev.inst, id: targetInstId, status: newStatus}}));
    } catch (error) {
        console.error(error);
    }
  };

  const handleReceiptUpload = (e) => {
      const { client, month, inst } = adminManageInst;
      const targetInstId = inst?.id || `${client.id}_month_${month}`;
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
          const img = new Image();
          img.onload = () => {
              const canvas = document.createElement('canvas');
              const MAX_WIDTH = 800;
              let width = img.width;
              let height = img.height;

              if (width > MAX_WIDTH) {
                  height *= MAX_WIDTH / width;
                  width = MAX_WIDTH;
              }
              canvas.width = width;
              canvas.height = height;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0, width, height);

              const base64Str = canvas.toDataURL('image/jpeg', 0.6);

              const instRef = doc(db, 'artifacts', appId, 'public', 'data', 'installments', targetInstId);
              setDoc(instRef, {
                  userId: client.id,
                  userName: client.name,
                  month: month,
                  receipt: base64Str,
                  status: inst?.status || 'review'
              }, { merge: true });

              setAdminManageInst(prev => ({...prev, inst: {...prev.inst, id: targetInstId, receipt: base64Str, status: prev.inst?.status || 'review'}}));
          };
          img.src = event.target.result;
      };
      reader.readAsDataURL(file);
  };

  const removeReceipt = async () => {
      const { inst } = adminManageInst;
      if (!inst?.id) return;
      const instRef = doc(db, 'artifacts', appId, 'public', 'data', 'installments', inst.id);
      await updateDoc(instRef, { receipt: null });
      setAdminManageInst(prev => ({...prev, inst: {...prev.inst, receipt: null}}));
  };

  const handleDeclarePayment = async (month) => {
    if (!user || !termsAccepted) return;
    const instId = `${user.uid}_month_${month}`;
    try {
      const instRef = doc(db, 'artifacts', appId, 'public', 'data', 'installments', instId);
      await setDoc(instRef, {
        userId: user.uid,
        userName: currentUserData?.name || user.displayName || 'Aluno',
        month: month,
        status: 'review'
      }, { merge: true });
      setSelectedPaymentMonth(null);
      setTermsAccepted(false);
      fireConfetti(); 
    } catch (error) { console.error(error); }
  };

  const handleCopyPix = () => {
    const codeToCopy = getCurrentPixCode();
    if (codeToCopy) {
      navigator.clipboard.writeText(codeToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleGenerateMotivation = async (paidCount) => {
    setMotivationData({ loading: true, text: 'A consultar as estrelas...' });
    const prompt = `És o "Oráculo da Formatura". O aluno pagou ${paidCount}/8 parcelas. Diz uma previsão divertida e bem curta sobre o baile de formatura em português de Portugal.`;
    const generatedText = await generateGeminiContent(prompt);
    setMotivationData({ loading: false, text: generatedText });
  };

  const handleGenerateReminder = async (clientName, pendingMonth) => {
    setReminderData({ name: clientName, month: pendingMonth, text: 'A gerar cobrança...', loading: true });
    const monthName = monthData[pendingMonth].name;
    const prompt = `Escreve uma mensagem de WhatsApp cobrando a parcela de ${monthName} para o aluno ${clientName} em português de Portugal. Tom de brincadeira de escola, lembrando que é preciso pagar o carnê para a festa acontecer.`;
    const generatedText = await generateGeminiContent(prompt);
    setReminderData({ name: clientName, month: pendingMonth, text: generatedText, loading: false });
  };

  const handleGenerateClassSummary = async () => {
    setClassSummary({ loading: true, text: 'A ler as contas da turma...' });
    const prompt = `Resumo tático de finanças de formatura em português de Portugal. Analisa o progresso e dá uma dica para o tesoureiro.`;
    const generatedText = await generateGeminiContent(prompt);
    setClassSummary({ loading: false, text: generatedText });
  };

  const exportToCSV = () => {
    if (usersList.length === 0) {
      alert("Não há dados para exportar ainda.");
      return;
    }
    let csvContent = "Nome do Aluno,Turma,Status";
    for(let m = 1; m <= 8; m++) {
      csvContent += `,Mes_${m}_${monthData[m].name}`;
    }
    csvContent += ",Total_Pago,Valor_Arrecadado(R$)\n";

    usersList.forEach(client => {
      const clientInsts = installments.filter(i => i.userId === client.id);
      let row = `"${client.name}","${client.class || 'N/A'}","Registado"`;
      let totalPagas = 0;
      let valorArrecadado = 0;

      for (let m = 1; m <= 8; m++) {
        const inst = clientInsts.find(i => i.month === m);
        const statusText = inst?.status === 'paid' ? 'PAGO' : (inst?.status === 'review' ? 'EM ANALISE' : 'PENDENTE');
        row += `,"${statusText}"`;
        if (inst?.status === 'paid') {
          totalPagas++;
          valorArrecadado += monthData[m].value;
        }
      }
      row += `,"${totalPagas}/8","R$ ${valorArrecadado},00"\n`;
      csvContent += row;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Relatorio_Terceirao.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getInstallmentStatus = (month) => {
    const inst = installments.find(i => i.userId === user?.uid && i.month === month);
    return inst ? inst.status : 'pending';
  };

  const isUnlocked = (month) => {
    if (month === 1) return true;
    const prevStatus = getInstallmentStatus(month - 1);
    return prevStatus === 'paid';
  };

  const calculateDynamicProgress = () => {
    const paidInstallments = installments.filter(i => i.status === 'paid');
    let currentTotalValue = 0;
    paidInstallments.forEach(inst => {
      if (monthData[inst.month]) currentTotalValue += monthData[inst.month].value;
    });

    const MAX_GOAL = 40000;
    const percentGeneral = Math.min(Math.round((currentTotalValue / MAX_GOAL) * 100), 100);

    let currentActiveGoal = partyGoals[partyGoals.length - 1]; 
    let previousGoalValue = 0;

    for (let i = 0; i < partyGoals.length; i++) {
        if (currentTotalValue < partyGoals[i].value) {
            currentActiveGoal = partyGoals[i];
            previousGoalValue = i > 0 ? partyGoals[i-1].value : 0;
            break;
        }
    }

    const goalRange = currentActiveGoal.value - previousGoalValue;
    const valueInCurrentRange = Math.max(0, currentTotalValue - previousGoalValue);
    const percentTarget = goalRange > 0 ? Math.min(Math.round((valueInCurrentRange / goalRange) * 100), 100) : 100;

    return { 
        totalValue: currentTotalValue, 
        maxGoal: MAX_GOAL,
        percentGeneral: percentGeneral,
        activeGoalLabel: currentActiveGoal.label,
        activeGoalIcon: currentActiveGoal.icon,
        activeGoalTarget: currentActiveGoal.value,
        percentTarget: percentTarget,
        missingForNextGoal: currentActiveGoal.value - currentTotalValue
    };
  };

  const getGlobalStats = () => {
    const total = usersList.length * 8;
    if (total === 0) return { paidPct: 0, reviewPct: 0, pendingPct: 0, paid: 0, review: 0 };
    const paid = installments.filter(i => i.status === 'paid').length;
    const review = installments.filter(i => i.status === 'review').length;
    const pending = total - paid - review;
    return {
      paid, review, pending,
      paidPct: Math.round((paid/total)*100),
      reviewPct: Math.round((review/total)*100),
      pendingPct: Math.round((pending/total)*100)
    };
  };

  const getClassPerformance = () => {
    const classes = ['3º Ano A', '3º Ano B', '3º Ano Noturno'];
    return classes.map(c => {
      const classUsers = usersList.filter(u => u.class === c);
      const classTotalInsts = classUsers.length * 8;
      if (classTotalInsts === 0) return { name: c, pct: 0 };
      const classUserIds = classUsers.map(u => u.id);
      const classPaidInsts = installments.filter(i => classUserIds.includes(i.userId) && i.status === 'paid').length;
      return { name: c, pct: Math.round((classPaidInsts/classTotalInsts)*100) };
    });
  };

  const progressData = calculateDynamicProgress();
  const globalStats = getGlobalStats();
  const classPerformance = getClassPerformance();
  
  const searchFilteredUsers = usersList.filter(u => {
      const matchClass = filterClass === 'Todas as Turmas' || u.class === filterClass;
      const matchName = u.name?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchClass && matchName;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F4EF] font-sans">
        <BackgroundIdentity />
        <div className="w-10 h-10 border-4 border-[#C41E1E] border-t-transparent rounded-full animate-spin z-10"></div>
      </div>
    );
  }

  const currentUserData = usersList.find(u => u.id === user?.uid);

  const HeroArtwork = () => (
    <div className="w-full flex flex-col items-center mb-0 pt-2 px-0 animate-in fade-in zoom-in duration-1000 pointer-events-none relative z-10">
      <img src={URL_DA_LOGO_TERCEIRAO} alt="Logo" className="w-full max-w-[20rem] sm:max-w-[28rem] h-auto object-contain transition-transform" />
      <img src={URL_DA_SUA_LOGO_CARNE} alt="Carnê" className="w-full max-w-[14rem] sm:max-w-[18rem] h-auto object-contain drop-shadow-lg -mt-8 sm:-mt-12 z-20 relative mix-blend-multiply opacity-95" />
    </div>
  );

  const GlobalCSSReset = () => (
    <style dangerouslySetInnerHTML={{__html: `
      :root { margin: 0 !important; padding: 0 !important; max-width: 100vw !important; }
      html, body, #root { 
        width: 100%; 
        min-height: 100vh; 
        margin: 0 !important; 
        padding: 0 !important; 
        max-width: none !important; 
        background-color: #F5F4EF !important; 
        text-align: left !important; 
        overflow-x: hidden;
      }
      .ios-shadow { box-shadow: 0 10px 40px rgba(0,0,0,0.06); }
      
      @keyframes overlay-enter { from { opacity: 0; backdrop-filter: blur(0px); } to { opacity: 1; backdrop-filter: blur(16px); } }
      @keyframes slide-up-spring { 0% { transform: translateY(100vh) scale(0.5) rotate(-10deg); opacity: 0; } 60% { transform: translateY(-30px) scale(1.05) rotate(5deg); opacity: 1; } 80% { transform: translateY(10px) scale(0.98) rotate(-2deg); } 100% { transform: translateY(0) scale(1) rotate(0deg); opacity: 1; } }
      @keyframes text-pop { 0% { transform: scale(0.5) translateY(50px); opacity: 0; filter: blur(10px); } 100% { transform: scale(1) translateY(0); opacity: 1; filter: blur(0px); } }
      @keyframes pulse-glow-epic { 0% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.8); } 70% { box-shadow: 0 0 0 60px rgba(245, 158, 11, 0); } 100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0); } }
      @keyframes float-money { 0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 1; } 100% { transform: translateY(-200px) scale(1.5) rotate(360deg); opacity: 0; } }
    `}} />
  );

  // --- TELA DE LOGIN ---
  if ((!user || user.isAnonymous) && !isAdmin) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F5F4EF] font-sans relative overflow-hidden">
        <GlobalCSSReset />
        <BackgroundIdentity />
        
        <div className="absolute top-6 right-6 z-[9999]">
          <button 
            onClick={() => setShowAdminModal(true)} 
            className="flex items-center gap-2 px-4 py-2.5 bg-white/60 backdrop-blur-md text-gray-800 rounded-full ios-shadow border border-white/40 hover:bg-white transition active:scale-95 font-semibold text-xs uppercase tracking-widest cursor-pointer"
          >
            <IconShieldCheck size={16} className="text-[#C41E1E]" /> Admin
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-4 max-w-5xl mx-auto w-full relative z-10">
          <HeroArtwork />
          <div className="bg-white/90 backdrop-blur-xl p-8 w-full max-w-sm rounded-[2.5rem] ios-shadow animate-in slide-in-from-bottom-8 duration-500 border border-white/60 mt-4 z-30">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-black tracking-tighter mb-2 uppercase">Acesso do Formando</h2>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">Inicia sessão com o teu Google para conferir o teu carnê personalizado.</p>
            </div>
            {loginError && <div className="bg-red-50 text-[#C41E1E] p-4 rounded-2xl text-[10px] mb-6 flex items-center gap-2 font-bold uppercase tracking-tight border border-[#C41E1E]/10 italic"><IconAlertCircle size={14} className="flex-shrink-0" /> {loginError}</div>}
            <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 bg-black text-white font-black py-4 px-4 rounded-full hover:bg-gray-800 transition active:scale-95 shadow-xl shadow-black/20 uppercase tracking-tighter cursor-pointer">Entrar com Google</button>
          </div>
        </div>

        {showAdminModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[99999] flex items-center justify-center p-4">
            <div className="bg-white/95 backdrop-blur-2xl w-full max-w-sm rounded-[2.5rem] ios-shadow overflow-hidden border border-white/20 animate-in zoom-in duration-200 relative">
              <div className="p-6 text-center relative border-b border-gray-100">
                <button onClick={() => setShowAdminModal(false)} className="absolute right-6 top-6 bg-gray-100 text-gray-500 hover:text-black rounded-full p-2 transition cursor-pointer"><IconX size={16} /></button>
                <div className="w-16 h-16 bg-[#C41E1E]/10 text-[#C41E1E] rounded-full flex items-center justify-center mx-auto mb-4 relative"><IconLock size={28} /><span className="absolute -top-1 -right-1 text-black text-xs">✦</span></div>
                <h3 className="text-xl font-bold tracking-tight text-black uppercase">Cofre do Terceirão</h3>
              </div>
              <form onSubmit={handleAdminSubmit} className="p-6 space-y-4">
                {adminError && <div className="text-[#C41E1E] text-xs text-center bg-red-50 py-3 rounded-2xl font-bold uppercase border border-red-100">{adminError}</div>}
                <input type="text" placeholder="Utilizador" value={adminForm.user} onChange={(e) => setAdminForm(prev => ({...prev, user: e.target.value}))} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:bg-gray-100 outline-none transition font-medium text-black shadow-inner" />
                <input type="password" placeholder="Palavra-passe" value={adminForm.pass} onChange={(e) => setAdminForm(prev => ({...prev, pass: e.target.value}))} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:bg-gray-100 outline-none transition font-medium text-black shadow-inner" />
                <button type="submit" className="w-full bg-black text-white font-bold py-5 rounded-full hover:bg-[#C41E1E] transition active:scale-95 shadow-lg uppercase tracking-widest text-xs cursor-pointer">Acessar Painel</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- TELA DE PERFIL NOVO ---
  if (user && !user.isAnonymous && !currentUserData && !isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F4EF] p-4 font-sans relative overflow-hidden">
        <GlobalCSSReset />
        <BackgroundIdentity />
        <HeroArtwork />
        <div className="bg-white/90 backdrop-blur-xl p-8 rounded-[3rem] ios-shadow max-w-sm w-full relative z-30 animate-in slide-in-from-bottom-8 duration-500 border border-white/60 mt-4">
          <button onClick={handleLogout} className="absolute top-8 right-8 text-gray-300 hover:text-black transition cursor-pointer"><IconLogOut size={24} /></button>
          <div className="flex justify-center mb-6 mt-6">
            {user.photoURL ? <img src={user.photoURL} alt="Foto" className="w-24 h-24 rounded-full border-4 border-white shadow-lg" /> : <div className="w-24 h-24 bg-gray-50 text-[#C41E1E]/40 rounded-full flex items-center justify-center shadow-inner border-2 border-white"><IconUser size={40} /></div>}
          </div>
          <h2 className="text-3xl font-black text-center text-black tracking-tighter mb-4 uppercase">Olá, {user.displayName?.split(' ')[0] || 'Aluno'}!</h2>
          <p className="text-gray-500 text-center mb-6 text-sm font-medium leading-relaxed">Confirma os teus dados para gerarmos o teu carnê oficial de formando.</p>
          
          <div className="space-y-4">
            {profileError && <div className="text-[#C41E1E] text-[10px] text-center bg-red-50 py-3 rounded-2xl font-bold uppercase border border-red-100">{profileError}</div>}
            
            <input 
              type="text" 
              placeholder="NOME COMPLETO" 
              value={userNameInput} 
              onChange={(e) => setUserNameInput(e.target.value)} 
              className="w-full px-6 py-5 bg-gray-50 border-none rounded-2xl focus:bg-gray-100 outline-none transition font-black text-center text-lg text-black shadow-inner" 
            />
            
            <select 
              value={userClassInput} 
              onChange={(e) => setUserClassInput(e.target.value)} 
              className="w-full px-6 py-5 bg-gray-50 border-none rounded-2xl focus:bg-gray-100 outline-none transition font-black text-center text-lg text-gray-500 shadow-inner cursor-pointer appearance-none"
            >
              <option value="" disabled>SELECIONA A TUA TURMA</option>
              <option value="3º Ano A">3º ANO A</option>
              <option value="3º Ano B">3º ANO B</option>
              <option value="3º Ano Noturno">3º ANO NOTURNO</option>
            </select>
            
            <button 
              type="button" 
              onClick={handleSaveProfile} 
              className="w-full bg-black text-white font-black py-5 mt-2 rounded-full hover:bg-[#C41E1E] transition active:scale-95 shadow-xl shadow-black/20 uppercase tracking-widest cursor-pointer"
            >
              Criar Meu Carnê
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- DASHBOARD PRINCIPAL ---
  return (
    <div className="min-h-screen bg-[#F5F4EF] font-sans text-black pb-20 relative overflow-x-hidden">
      <GlobalCSSReset />
      <BackgroundIdentity />

      {/* --- TELA DE COMEMORAÇÃO ÉPICA --- */}
      {showCelebration && (
        <div className="fixed inset-0 z-[999999] flex flex-col items-center justify-center p-4 overflow-hidden" style={{ animation: 'overlay-enter 0.5s ease-out forwards' }}>
           <div className="absolute inset-0 bg-black/85"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,30,30,0.5)_0%,transparent_70%)] animate-pulse"></div>

           <div className="relative z-10 flex flex-col items-center w-full max-w-lg" style={{ animation: 'slide-up-spring 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards' }}>
               <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full border-[8px] border-[#F59E0B] overflow-hidden relative mb-8" style={{ animation: 'pulse-glow-epic 2s infinite' }}>
                  <div className="absolute inset-0 border-4 border-white/50 rounded-full z-20"></div>
                  <img src="https://c.tenor.com/by0iV9jx9boAAAAC/tenor.gif" alt="Celebração Épica" className="w-full h-full object-cover relative z-10" />
               </div>
               
               <div className="text-center" style={{ animation: 'text-pop 0.5s ease-out 0.6s backwards' }}>
                   <div className="inline-block py-2.5 px-6 bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-950 font-black text-xs sm:text-sm uppercase tracking-[0.3em] rounded-full mb-6 shadow-[0_0_30px_rgba(245,158,11,0.6)]">
                      🎉 Nova Conquista 🎉
                   </div>
                   <h1 className="text-6xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-yellow-100 to-amber-400 uppercase tracking-tighter mb-4 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] leading-none">
                      META <br/> BATIDA!
                   </h1>
                   <p className="text-white font-bold text-lg sm:text-xl uppercase tracking-widest mt-6 drop-shadow-md bg-black/40 py-3 px-6 rounded-2xl border border-white/10 backdrop-blur-sm inline-block">
                      O Baile do Terceirão tá cada vez maior!
                   </p>
               </div>
           </div>
           
           {[...Array(15)].map((_, i) => (
              <div key={i} className="absolute text-4xl sm:text-6xl opacity-90 drop-shadow-lg" style={{ 
                  left: `${Math.random() * 100}%`, top: `${Math.random() * 100 + 20}%`, animation: `float-money ${Math.random() * 2 + 2}s ease-out forwards`, animationDelay: `${Math.random() * 2 + 0.2}s`
              }}>💸</div>
           ))}
        </div>
      )}

      {/* MODAL DE CONFIRMAÇÃO DE EXCLUSÃO (ADMIN) */}
      {studentToDelete && isAdmin && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999999] flex items-center justify-center p-4 animate-in fade-in duration-200">
           <div className="bg-white rounded-[3rem] w-full max-w-sm p-8 shadow-2xl relative border border-white/50 animate-in zoom-in duration-300 text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <IconTrash size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 text-black">Apagar Aluno?</h3>
              <p className="text-gray-500 font-medium text-sm mb-6 leading-relaxed">
                 Tem a certeza que pretende remover <strong>{studentToDelete.name}</strong> do sistema? Todas as parcelas associadas serão apagadas permanentemente.
              </p>
              <div className="flex gap-3">
                 <button onClick={() => setStudentToDelete(null)} className="flex-1 bg-gray-100 text-gray-600 font-black py-4 rounded-[1.5rem] uppercase text-xs tracking-widest hover:bg-gray-200 transition cursor-pointer">Cancelar</button>
                 <button onClick={confirmDeleteStudent} className="flex-1 bg-red-500 text-white font-black py-4 rounded-[1.5rem] uppercase text-xs tracking-widest hover:bg-red-600 transition active:scale-95 cursor-pointer shadow-lg shadow-red-500/30">Apagar</button>
              </div>
           </div>
        </div>
      )}

      <header className="fixed top-0 w-full bg-[#F5F4EF]/85 backdrop-blur-xl z-[50] px-6 py-4 border-b border-black/5">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-9 h-9 bg-white rounded-[0.8rem] flex items-center justify-center ios-shadow text-[#C41E1E] font-serif font-black text-lg relative overflow-hidden">✦</div>
             <span className="font-black tracking-tighter text-gray-800 uppercase text-sm">Controle Terceirão</span>
          </div>
          <div className="flex items-center gap-2">
            {isAdmin ? (
              <button onClick={() => setIsAdmin(false)} className="px-5 py-2.5 bg-black text-white rounded-full text-[10px] font-black hover:bg-[#C41E1E] transition active:scale-95 uppercase tracking-widest cursor-pointer">Sair Admin</button>
            ) : (
              <>
                <button onClick={() => setShowAdminModal(true)} className="w-10 h-10 bg-white text-gray-400 rounded-full flex items-center justify-center ios-shadow hover:text-[#C41E1E] transition active:scale-95 shadow-sm border border-black/5 cursor-pointer"><IconShieldCheck size={18} /></button>
                <button onClick={handleLogout} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#C41E1E] transition ios-shadow active:scale-95 shadow-sm border border-black/5 cursor-pointer"><IconLogOut size={16} /></button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 mt-24 relative z-10 w-full">
        
        {usersList.length > 0 && (
          <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-[2.5rem] ios-shadow mb-6 border border-white/60 relative overflow-hidden w-full flex flex-col gap-6">
            
            <div className="bg-[#F5F4EF] p-5 rounded-[2rem] border border-white shadow-inner">
                <div className="flex justify-between items-end mb-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-1"><IconTarget size={12} className="text-[#C41E1E]"/> CAÇANDO A PRÓXIMA META</span>
                    <h3 className="font-black text-black tracking-tighter text-xl uppercase">{progressData.activeGoalIcon} Desbloquear: {progressData.activeGoalLabel}</h3>
                  </div>
                  <div className="text-right">
                    <span className="font-black text-[#C41E1E] text-lg tracking-tighter">{progressData.percentTarget}%</span>
                  </div>
                </div>
                
                <div className="w-full h-4 sm:h-5 bg-gray-200 rounded-full overflow-hidden shadow-inner relative mb-2">
                  <div className="h-full bg-gradient-to-r from-red-500 to-[#C41E1E] rounded-full transition-all duration-1000 ease-out relative z-0 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2)]" style={{ width: `${Math.max(progressData.percentTarget, 2)}%` }}>
                     <div className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[slide_1s_linear_infinite]"></div>
                  </div>
                </div>
                
                <p className="text-right text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Faltam <span className="text-black font-black">R$ {progressData.missingForNextGoal.toLocaleString('pt-BR')},00</span> para chegar nos R$ {progressData.activeGoalTarget.toLocaleString('pt-BR')}!
                </p>
            </div>

            <div>
                <div className="flex justify-between items-center mb-2 px-2">
                  <h3 className="font-black text-gray-400 tracking-tighter text-xs uppercase">Visão Geral do Fundo (Até 40k)</h3>
                  <span className="font-black text-gray-800 text-xs tracking-tighter">R$ {progressData.totalValue.toLocaleString('pt-BR')},00</span>
                </div>
                
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner relative mb-3">
                  <div className="h-full bg-black rounded-full transition-all duration-1000 ease-out z-0" style={{ width: `${Math.max(progressData.percentGeneral, 1)}%` }}></div>
                  
                  {partyGoals.slice(0, -1).map(goal => (
                    <div key={goal.value} className="absolute top-0 h-full w-[2px] bg-white/40 z-10" style={{ left: `${(goal.value / progressData.maxGoal) * 100}%` }}></div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {partyGoals.map(m => {
                    const achieved = progressData.totalValue >= m.value;
                    const isCurrentTarget = m.label === progressData.activeGoalLabel;
                    
                    return (
                      <div key={m.value} className={`px-3 py-1.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest border transition-all 
                        ${achieved ? 'bg-green-50 text-green-600 border-green-200 shadow-sm opacity-100' : 
                          isCurrentTarget ? 'bg-red-50 text-[#C41E1E] border-red-200 animate-pulse' : 
                          'bg-gray-50 text-gray-300 border-gray-100 opacity-60'}`}
                      >
                        {achieved ? '✅' : m.icon} {m.label} ({m.value >= 1000 ? (m.value/1000) + 'k' : m.value})
                      </div>
                    )
                  })}
                </div>
            </div>

          </div>
        )}

        {!isAdmin ? (
          <div className="space-y-6 w-full">
            <HeroArtwork />
            <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-[2.5rem] ios-shadow flex flex-col sm:flex-row justify-between items-center gap-6 border border-white/60 -mt-4 relative z-30 shadow-2xl shadow-black/5 w-full">
              <div className="flex items-center gap-5 text-center sm:text-left">
                {user?.photoURL ? <img src={user.photoURL} alt="Perfil" className="w-16 h-16 rounded-full shadow-md border-2 border-white" /> : <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-inner"><IconUser size={28} className="text-[#C41E1E]/30"/></div>}
                <div><h2 className="text-2xl sm:text-3xl font-black tracking-tighter text-black flex items-center gap-2 justify-center sm:justify-start uppercase">{currentUserData?.name || user?.displayName || 'Aluno'} <span className="text-[#C41E1E] text-xl">✦</span></h2><p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-1">{currentUserData?.class || 'Turma não informada'} • VIP Formando</p></div>
              </div>
              <div className="w-full sm:w-auto bg-[#F5F4EF] px-10 py-5 rounded-[1.8rem] flex flex-col items-center border border-black/5 shadow-inner">
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Pagos</p>
                <p className="text-3xl font-black text-black tracking-tighter">{installments.filter(i => i.userId === user?.uid && i.status === 'paid').length} <span className="text-xl text-[#C41E1E] opacity-50">/ 8</span></p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-[2.5rem] ios-shadow flex flex-col border border-white/60 w-full h-full justify-center">
                <div className="flex gap-4 items-center mb-4">
                  <div className="bg-black p-4 rounded-2xl flex-shrink-0 text-white shadow-lg shadow-black/20"><IconSparkles size={24} /></div>
                  <h3 className="font-black text-xl text-black uppercase tracking-tighter">Oráculo da Formatura</h3>
                </div>
                {motivationData.text ? (
                  <div className="bg-[#F5F4EF] p-5 rounded-[1.5rem] border border-white shadow-inner flex-1 flex items-center">
                    <p className="font-bold text-gray-700 leading-tight text-sm uppercase tracking-tighter italic">"{motivationData.text}"</p>
                  </div>
                ) : (
                  <button onClick={() => handleGenerateMotivation(installments.filter(i => i.userId === user?.uid && i.status === 'paid').length)} className="w-full text-xs font-black bg-[#F5F4EF] text-[#C41E1E] px-6 py-4 rounded-2xl active:scale-95 transition border border-black/5 uppercase cursor-pointer">✨ Ver Previsão Mística</button>
                )}
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-7 rounded-[2.5rem] ios-shadow border border-white/60 w-full">
                <div className="flex items-center gap-3 mb-5">
                    <div className="bg-amber-100 p-3 rounded-xl text-amber-600 shadow-inner"><IconBarChart size={20} /></div>
                    <h3 className="font-black text-xl text-black uppercase tracking-tighter italic">Guerra das Turmas</h3>
                </div>
                <div className="space-y-4">
                    {classPerformance.sort((a,b) => b.pct - a.pct).map((cls, idx) => (
                        <div key={idx} className="relative">
                            <div className="flex justify-between items-end mb-1">
                                <span className={`text-[11px] font-black uppercase tracking-widest ${idx === 0 ? 'text-amber-500' : 'text-gray-600'}`}>
                                    {idx === 0 ? '👑 1º ' : `${idx + 1}º `} {cls.name}
                                </span>
                                <span className={`text-[10px] font-bold ${idx === 0 ? 'text-amber-600' : 'text-gray-400'}`}>{cls.pct}% PAGO</span>
                            </div>
                            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                                <div style={{width: `${cls.pct}%`}} className={`h-full rounded-full transition-all duration-1000 ${idx === 0 ? 'bg-gradient-to-r from-amber-400 to-amber-500 shadow-md' : 'bg-black'}`}></div>
                            </div>
                        </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((m) => {
                const status = getInstallmentStatus(m);
                const isPaid = status === 'paid';
                const isReview = status === 'review';
                const unlocked = isUnlocked(m);
                const currentMonthData = monthData[m];
                
                return (
                  <div key={m} className={`bg-white/95 backdrop-blur-md p-7 rounded-[2.5rem] flex flex-col transition-all duration-300 border border-white/50 w-full 
                    ${isPaid ? 'ios-shadow ring-4 ring-[#C41E1E]/10 bg-gradient-to-b from-white to-red-50/20' : 
                      isReview ? 'ios-shadow ring-4 ring-amber-100 bg-gradient-to-b from-white to-amber-50/30' : 
                      'ios-shadow hover:-translate-y-1 hover:shadow-xl'}`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Parcela 0{m}</span>
                        <h4 className="text-2xl font-black text-black tracking-tighter uppercase mt-1">{currentMonthData.name}</h4>
                        <p className={`text-xl font-black mt-1 tracking-tighter ${!unlocked && !isPaid && !isReview ? 'text-gray-300' : 'text-[#C41E1E]'}`}>R$ {currentMonthData.value}</p>
                      </div>
                      
                      {isPaid ? <IconCheckCircle2 className="text-[#C41E1E]" size={28} /> : 
                       isReview ? <IconClock className="text-amber-500" size={28} /> :
                       !unlocked ? <IconLock className="text-gray-200" size={28} /> :
                       <IconCircle className="text-gray-300" size={28} />}
                    </div>

                    <div className="mt-auto">
                      {isPaid ? (
                        <div className="w-full py-4 bg-[#C41E1E]/10 text-[#C41E1E] rounded-[1.2rem] text-center font-black uppercase text-[10px] tracking-widest">CONCLUÍDO</div>
                      ) : isReview ? (
                        <div className="w-full py-4 bg-amber-50 text-amber-600 rounded-[1.2rem] text-center font-bold text-[10px] tracking-widest uppercase italic">Em Análise</div>
                      ) : !unlocked ? (
                        <button disabled className="w-full py-4 bg-gray-100 text-gray-400 rounded-[1.2rem] text-center font-black text-[10px] tracking-widest flex items-center justify-center gap-2 cursor-not-allowed border border-gray-200 uppercase">
                          <IconLock size={12} /> Bloqueado
                        </button>
                      ) : (
                        <button onClick={() => { setSelectedPaymentMonth(m); setTermsAccepted(false); }} className="w-full py-4 bg-black text-white rounded-[1.2rem] text-center font-black text-xs uppercase tracking-widest hover:bg-[#C41E1E] transition active:scale-95 shadow-md shadow-black/10 cursor-pointer">Pagar Agora</button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {!isUnlocked(2) && !installments.find(i => i.userId === user?.uid && i.month === 1 && i.status === 'paid') && (
              <div className="p-5 bg-white/60 border border-white rounded-[2rem] flex items-center gap-3 text-gray-500 text-[10px] font-bold uppercase tracking-widest ios-shadow mt-4">
                <IconAlertCircle size={16} className="text-[#C41E1E]" /> Paga a primeira parcela para desbloquear as seguintes!
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-black p-10 rounded-[3rem] ios-shadow flex justify-between items-center relative overflow-hidden">
              <span className="absolute top-4 right-10 text-[#C41E1E] text-4xl opacity-50">✦</span>
              <div className="relative z-10"><h2 className="text-4xl font-black tracking-tighter text-white uppercase italic leading-none">Central da Tesouraria</h2><p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-4 opacity-60">Validação e Gestão Financeira.</p></div>
              <IconShieldCheck size={48} className="text-[#C41E1E] opacity-50 z-10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-[3rem] p-8 ios-shadow border border-white/60 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center gap-2"><IconPieChart size={20} className="text-[#C41E1E]"/><h3 className="font-black text-black uppercase tracking-tighter">Status Global</h3></div>
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{usersList.length * 8} Parcelas</span>
                </div>
                
                <div className="w-full h-8 flex rounded-full overflow-hidden shadow-inner mb-4">
                   <div style={{width: `${globalStats.paidPct}%`}} className="bg-green-500 h-full transition-all duration-1000"></div>
                   <div style={{width: `${globalStats.reviewPct}%`}} className="bg-amber-400 h-full transition-all duration-1000"></div>
                   <div style={{width: `${globalStats.pendingPct}%`}} className="bg-gray-200 h-full transition-all duration-1000"></div>
                </div>

                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <div className="flex items-center gap-1 text-green-600"><div className="w-2 h-2 rounded-full bg-green-500"></div> Pagos ({globalStats.paidPct}%)</div>
                  <div className="flex items-center gap-1 text-amber-600"><div className="w-2 h-2 rounded-full bg-amber-400"></div> Análise ({globalStats.reviewPct}%)</div>
                  <div className="flex items-center gap-1 text-gray-500"><div className="w-2 h-2 rounded-full bg-gray-200"></div> Aberto ({globalStats.pendingPct}%)</div>
                </div>
              </div>

              <div className="bg-white rounded-[3rem] p-8 ios-shadow border border-white/60 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6"><IconBarChart size={20} className="text-[#C41E1E]"/><h3 className="font-black text-black uppercase tracking-tighter">Taxa de Pagamento por Turma</h3></div>
                
                <div className="space-y-4">
                  {classPerformance.map((cls, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-1 text-gray-600">
                        <span>{cls.name}</span>
                        <span>{cls.pct}% PAGO</span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                        <div style={{width: `${cls.pct}%`}} className="bg-black h-full rounded-full transition-all duration-1000"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[3rem] ios-shadow border border-white flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4"><IconSparkles size={24} className="text-[#C41E1E]" /><h3 className="font-black text-xl text-black uppercase tracking-tighter">Relatório AI</h3></div>
                {classSummary.text ? <div className="bg-[#F5F4EF] p-5 rounded-[2rem] text-gray-700 font-medium text-sm leading-relaxed border border-white shadow-inner">{classSummary.text}</div> : <button onClick={handleGenerateClassSummary} className="text-xs font-black bg-black text-white px-8 py-4 rounded-full active:scale-95 flex items-center justify-center gap-2 shadow-lg uppercase tracking-widest w-full cursor-pointer">✨ Gerar Resumo</button>}
              </div>

              <div className="bg-[#C41E1E] p-8 rounded-[3rem] ios-shadow border border-[#C41E1E]/50 flex flex-col justify-center text-white relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 text-white/10 rotate-12"><IconDownload size={140}/></div>
                <div className="flex items-center gap-3 mb-4 relative z-10"><IconDownload size={24} className="text-white" /><h3 className="font-black text-xl uppercase tracking-tighter">Exportar Dados</h3></div>
                <p className="text-white/80 font-medium text-sm mb-5 relative z-10">Descarrega a tabela com todas as parcelas de todos os alunos prontas para usar no Excel.</p>
                <button onClick={exportToCSV} className="text-xs font-black bg-white text-[#C41E1E] px-8 py-4 rounded-full active:scale-95 flex items-center justify-center gap-2 shadow-xl uppercase tracking-widest w-full relative z-10 hover:bg-black hover:text-white transition cursor-pointer">
                  ⬇️ Descarregar .CSV
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[3rem] ios-shadow overflow-hidden p-4 border border-white">
              
              <div className="p-4 sm:p-6 pb-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                  <h3 className="font-black text-2xl text-black tracking-tighter uppercase italic whitespace-nowrap">Formandos ({searchFilteredUsers.length})</h3>
                  
                  <div className="relative w-full sm:w-auto">
                    <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      placeholder="Procurar aluno..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="w-full sm:w-64 pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-xs font-bold text-black focus:outline-none focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100 transition-all shadow-inner"
                    />
                  </div>
                </div>
                
                <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
                  {['Todas as Turmas', '3º Ano A', '3º Ano B', '3º Ano Noturno'].map(t => (
                    <button 
                      key={t} 
                      onClick={() => setFilterClass(t)} 
                      className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all active:scale-95 flex items-center gap-2 cursor-pointer
                        ${filterClass === t ? 'bg-black text-white shadow-md' : 'bg-gray-50 text-gray-500 border border-gray-200 hover:bg-gray-100'}`}
                    >
                      {filterClass === t && <IconFilter size={12}/>} {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="divide-y divide-gray-50 px-2 sm:px-4">
                {searchFilteredUsers.length === 0 && <p className="p-10 text-center text-gray-400 uppercase text-xs font-bold italic">Nenhum aluno registado ou encontrado.</p>}
                
                {searchFilteredUsers.map(client => {
                  const clientInsts = installments.filter(i => i.userId === client.id).sort((a, b) => a.month - b.month);
                  const paidCount = clientInsts.filter(i => i.status === 'paid').length;
                  return (
                    <div key={client.id} className="py-6 sm:py-8 hover:bg-[#F5F4EF]/50 transition rounded-[2.5rem] px-4 my-2 border border-transparent hover:border-gray-100">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
                        <div className="flex items-center gap-5">
                          {client.photoURL ? (
                             <img src={client.photoURL} alt="P" className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
                          ) : (
                            <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center font-black text-xl border-4 border-white shadow-md">{client.name ? client.name.charAt(0).toUpperCase() : 'A'}</div>
                          )}
                          <div>
                            <h4 className="text-xl font-bold text-black uppercase tracking-tighter italic">{client.name}</h4>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{paidCount}/8 quitadas • {client.class || 'Turma N/A'}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                           {clientInsts.some(i => i.status !== 'paid') && <button onClick={() => handleGenerateReminder(client.name, clientInsts.find(i => i.status !== 'paid').month)} className="text-[10px] font-black bg-red-50 text-[#C41E1E] px-6 py-3 rounded-full hover:bg-black hover:text-white flex items-center gap-2 uppercase tracking-widest border border-[#C41E1E]/10 shadow-sm transition cursor-pointer"><IconSparkles size={14} /> Cobrar IA</button>}
                           {/* NOVO BOTÃO APAGAR ALUNO */}
                           <button onClick={() => setStudentToDelete({ id: client.id, name: client.name })} className="p-3 bg-gray-50 text-gray-400 rounded-full hover:bg-red-500 hover:text-white transition cursor-pointer shadow-sm border border-gray-200" title="Apagar Aluno do Sistema">
                               <IconTrash size={14} />
                           </button>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {[1,2,3,4,5,6,7,8].map(m => {
                          const inst = clientInsts.find(i => i.month === m);
                          const isPaid = inst?.status === 'paid';
                          const isReview = inst?.status === 'review';
                          const hasReceipt = inst?.receipt;

                          return (
                            <button 
                              key={m} 
                              onClick={() => setAdminManageInst({ client, month: m, inst })} 
                              className={`flex-1 min-w-[3.8rem] py-4 rounded-2xl flex flex-col items-center justify-center transition active:scale-90 shadow-sm cursor-pointer relative overflow-hidden
                                ${isPaid ? 'bg-green-50 text-green-600 border border-green-100' : 
                                  isReview ? 'bg-amber-100 text-amber-600 animate-pulse border border-amber-200 shadow-md ring-2 ring-amber-500/20' : 
                                  'bg-gray-50 text-gray-300 border border-gray-100 hover:bg-gray-200'}`}
                            >
                              <span className="text-[9px] font-black mb-1 text-black opacity-40 uppercase">M0{m}</span>
                              {isPaid ? <IconCheckCircle2 size={20} /> : isReview ? <IconClock size={20} /> : <IconCircle size={20} />}
                              
                              {hasReceipt && (
                                <div className="absolute -top-1 -right-1 bg-amber-400 text-white p-1 rounded-bl-lg">
                                  <IconPaperclip size={10} />
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* --- MODAL DE GESTÃO DE PARCELA E COMPROVATIVOS (ADMIN) --- */}
      {adminManageInst && isAdmin && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999999] flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-[3rem] w-full max-w-md p-8 shadow-2xl relative border border-white/50 animate-in zoom-in duration-300">
                <button onClick={() => setAdminManageInst(null)} className="absolute right-6 top-6 bg-gray-100 hover:bg-gray-200 text-gray-500 p-2 rounded-full transition cursor-pointer"><IconX size={16}/></button>
                
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-1 text-black pr-8 truncate">{adminManageInst.client.name}</h3>
                <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mb-6">Mês {adminManageInst.month} - {monthData[adminManageInst.month].name}</p>

                <div className="mb-6 bg-[#F5F4EF] p-5 rounded-[2rem] border border-white shadow-inner">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 block">Status Financeiro</label>
                    <div className="flex gap-2">
                        <button onClick={() => updateAdminInstStatus('pending')} className={`flex-1 py-3 rounded-2xl font-black text-[10px] uppercase transition cursor-pointer ${(!adminManageInst.inst || adminManageInst.inst?.status === 'pending') ? 'bg-gray-800 text-white shadow-md' : 'bg-white text-gray-400 border border-gray-200 hover:bg-gray-50'}`}>Pendente</button>
                        <button onClick={() => updateAdminInstStatus('review')} className={`flex-1 py-3 rounded-2xl font-black text-[10px] uppercase transition cursor-pointer ${adminManageInst.inst?.status === 'review' ? 'bg-amber-500 text-white shadow-md' : 'bg-white text-gray-400 border border-gray-200 hover:bg-gray-50'}`}>Análise</button>
                        <button onClick={() => updateAdminInstStatus('paid')} className={`flex-1 py-3 rounded-2xl font-black text-[10px] uppercase transition cursor-pointer ${adminManageInst.inst?.status === 'paid' ? 'bg-green-500 text-white shadow-md' : 'bg-white text-gray-400 border border-gray-200 hover:bg-gray-50'}`}>Pago</button>
                    </div>
                </div>

                <div className="mb-6">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2"><IconPaperclip size={12} className="text-amber-500"/> Comprovativo Anexado</label>
                    
                    {adminManageInst.inst?.receipt ? (
                        <div className="relative group rounded-[2rem] overflow-hidden border-4 border-gray-100 shadow-md">
                           <img src={adminManageInst.inst.receipt} alt="Comprovativo" className="w-full h-48 object-cover" />
                           <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 backdrop-blur-sm">
                              <a href={adminManageInst.inst.receipt} download={`Comprovativo_${adminManageInst.client.name}_Mes${adminManageInst.month}.jpg`} className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-amber-400 transition cursor-pointer">Baixar Imagem</a>
                              <button onClick={removeReceipt} className="bg-red-500 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-red-600 transition cursor-pointer">Apagar Ficheiro</button>
                           </div>
                        </div>
                    ) : (
                        <label className="border-2 border-dashed border-gray-200 rounded-[2rem] h-32 flex flex-col items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-400 hover:bg-amber-50 transition cursor-pointer bg-gray-50">
                            <IconUpload size={24} className="mb-2" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Fazer Upload (Imagem)</span>
                            <input type="file" accept="image/*" className="hidden" onChange={handleReceiptUpload} />
                        </label>
                    )}
                </div>

                <button onClick={() => setAdminManageInst(null)} className="w-full bg-black text-white font-black py-4 rounded-[1.5rem] uppercase text-xs tracking-widest hover:bg-[#C41E1E] transition active:scale-95 cursor-pointer shadow-lg">Fechar</button>
            </div>
        </div>
      )}

      {/* MODAL PAGAMENTO (ALUNO) */}
      {selectedPaymentMonth !== null && !isAdmin && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-sm rounded-t-[3rem] sm:rounded-[3rem] ios-shadow relative animate-in slide-in-from-bottom-12 duration-500 pb-8 sm:pb-0 border border-white/50 overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-black via-[#C41E1E] to-black opacity-20"></div>
            <div className="p-8 pb-4 text-center relative border-b border-gray-50">
              <button onClick={() => setSelectedPaymentMonth(null)} className="absolute right-6 top-6 bg-gray-100 text-gray-500 hover:text-black rounded-full p-2 transition active:scale-90 shadow-sm cursor-pointer"><IconX size={20}/></button>
              <h3 className="text-3xl font-black text-black tracking-tighter uppercase italic">{monthData[selectedPaymentMonth].name} ✦</h3>
              <p className="text-4xl font-black text-black mt-2 tracking-tighter">R$ {monthData[selectedPaymentMonth].value},00</p>
            </div>
            <div className="p-8 pt-6 text-center">
              <div className="bg-white p-5 rounded-[2.5rem] shadow-2xl border border-gray-100 mx-auto w-full max-w-[250px] mb-8 flex justify-center relative overflow-hidden shadow-inner">
                <img src={qrCodeUrl} alt="QR Code Pix" className="w-52 h-52 rounded-xl relative z-10" />
              </div>
              <div className="text-left bg-[#F5F4EF] p-6 rounded-[2rem] mb-6 border border-white shadow-inner">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1.5"><IconQrCode size={14} className="text-[#C41E1E]"/> Pix Copia e Cola</p>
                <div className="flex items-center gap-3">
                  <input type="text" readOnly value={currentPixCode} className="flex-1 bg-transparent text-black font-black text-xs focus:outline-none truncate" />
                  <button onClick={handleCopyPix} className="bg-black text-white p-4 rounded-2xl active:scale-90 shadow-lg shadow-black/20 transition cursor-pointer">{copied ? <IconCheck size={20} /> : <IconCopy size={20} />}</button>
                </div>
              </div>

              {/* AVISO DE CONCORDÂNCIA */}
              <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3 text-left">
                <input 
                  type="checkbox" 
                  id="terms" 
                  checked={termsAccepted} 
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-[#C41E1E] cursor-pointer"
                />
                <label htmlFor="terms" className="text-[10px] leading-tight text-red-800 font-bold uppercase cursor-pointer select-none">
                  Ao adquirir este Carnê, você concorda que o valor total deverá ser pago até o final, mesmo em caso de desistência ou interrupção da participação, não havendo reembolso dos valores já pagos.
                </label>
              </div>

              <button 
                disabled={!termsAccepted}
                onClick={() => handleDeclarePayment(selectedPaymentMonth)} 
                className={`w-full py-6 rounded-[1.8rem] font-black transition active:scale-95 shadow-2xl flex justify-center items-center gap-3 uppercase tracking-tighter text-sm italic
                  ${termsAccepted ? 'bg-green-500 text-white shadow-green-500/20 hover:bg-green-600' : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'}`}
              >
                <IconCheckCircle2 size={24} /> Confirmar que paguei
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL MENSAGEM IA */}
      {reminderData && isAdmin && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-white/98 backdrop-blur-3xl w-full max-w-md rounded-[3rem] ios-shadow overflow-hidden animate-in zoom-in duration-300 border border-white/40 shadow-2xl">
            <div className="p-8 text-black flex justify-between items-center border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-black text-[#C41E1E] p-3 rounded-2xl shadow-lg shadow-black/20"><IconSparkles size={20}/></div>
                <h3 className="font-black tracking-tighter text-xl uppercase italic">Mensagem Gerada</h3>
              </div>
              <button onClick={() => setReminderData(null)} className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition cursor-pointer"><IconX size={20} /></button>
            </div>
            <div className="p-8">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-5">Destinatário: <span className="text-black">{reminderData.name}</span></p>
              <div className="bg-[#F5F4EF] rounded-[2rem] p-7 text-black font-bold text-[15px] leading-relaxed whitespace-pre-wrap min-h-[140px] border border-white shadow-inner italic">
                {reminderData.loading ? <div className="animate-pulse text-gray-300 text-center mt-8 uppercase font-black tracking-widest">A escrever cobrança...</div> : `"${reminderData.text}"`}
              </div>
            </div>
            <div className="p-8 pt-0">
              {!reminderData.loading && (
                <button onClick={() => { navigator.clipboard.writeText(reminderData.text); setReminderData(null); }} className="w-full bg-black text-white font-black py-5 rounded-[1.8rem] hover:bg-[#C41E1E] transition flex justify-center items-center gap-3 active:scale-95 shadow-2xl uppercase tracking-widest cursor-pointer">
                  <IconCopy size={20} /> Copiar para o Whats
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
