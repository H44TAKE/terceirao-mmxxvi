import React, { useState, useEffect } from 'react';

// --- ÍCONES INLINE ---
const IconCheckCircle2 = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>;
const IconCircle = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/></svg>;
const IconQrCode = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3v5h3v-5z"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>;
const IconCopy = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>;
const IconShieldCheck = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>;
const IconUser = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconLogOut = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>;
const IconCheck = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"/></svg>;
const IconLock = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
const IconX = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
const IconAlertCircle = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>;
const IconClock = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IconDownload = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>;
const IconBarChart = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>;
const IconPieChart = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>;
const IconFilter = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>;
const IconTarget = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const IconSearch = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
const IconUpload = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>;
const IconPaperclip = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>;
const IconTrash = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>;
const IconReceipt = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17V7"/></svg>;
const IconVote = ({ size=24, className="" }: any) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 12 2 2 4-4"/><path d="M5 18v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4"/><path d="M21 15H3"/><path d="M5 8v7h14V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Z"/></svg>;

// --- CONFIGURAÇÃO FIREBASE ---
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithCustomToken, signInAnonymously, GoogleAuthProvider, signInWithPopup, signOut, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, onSnapshot, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';

const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {
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
const PIX_1_A_4 = "00020126580014BR.GOV.BCB.PIX013635951200-42ae-4cd8-98df-cda3e7471d995204000053039865406100.005802BR5924Joana D'Arc Lopes Coelho6009SAO PAULO6214051048Yd5jlZB16304FFD8";
const PIX_5_A_8 = "00020126580014BR.GOV.BCB.PIX013635951200-42ae-4cd8-98df-cda3e7471d995204000053039865406125.005802BR5924Joana D'Arc Lopes Coelho6009SAO PAULO62140510VwbEu1ptPr63043342";

// LINKS DAS IMAGENS PNG
const URL_DA_SUA_LOGO_CARNE = "https://i.imgur.com/yxlAsvl.png"; 
const URL_DA_LOGO_TERCEIRAO = "https://i.imgur.com/hMk1pfb.png";

// DATA DO BAILE (CONTAGEM DECRESCENTE)
const DATA_DO_BAILE = new Date('2026-12-11T20:00:00').getTime();


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
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [usersList, setUsersList] = useState<any[]>([]);
  const [installments, setInstallments] = useState<any[]>([]);
  const [expenses, setExpenses] = useState<any[]>([]);
  const [polls, setPolls] = useState<any[]>([]);
  
  const [userNameInput, setUserNameInput] = useState('');
  const [userClassInput, setUserClassInput] = useState('');
  const [selectedPaymentMonth, setSelectedPaymentMonth] = useState<number | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminTab, setAdminTab] = useState('alunos'); // 'alunos', 'despesas', 'enquetes'
  
  const [adminForm, setAdminForm] = useState({ user: '', pass: '' });
  const [adminError, setAdminError] = useState('');
  const [profileError, setProfileError] = useState('');
  
  const [showCelebration, setShowCelebration] = useState(false);
  const [lastCompletedGoal, setLastCompletedGoal] = useState<number | null>(null);
  
  const [filterClass, setFilterClass] = useState('Todas as Turmas');
  const [filterStatus, setFilterStatus] = useState('Todos'); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [adminManageInst, setAdminManageInst] = useState<any>(null); 
  const [studentToDelete, setStudentToDelete] = useState<any>(null);
  
  const [viewingImage, setViewingImage] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  // Novos estados para painel admin (Despesas e Enquetes)
  const [newExpense, setNewExpense] = useState({ desc: '', val: '' });
  const [newPoll, setNewPoll] = useState({ question: '', option1: '', option2: '' });

  const monthData: any = {
    1: { name: 'Março', value: 100 },
    2: { name: 'Abril', value: 100 },
    3: { name: 'Maio', value: 100 },
    4: { name: 'Junho', value: 100 },
    5: { name: 'Julho', value: 100 },
    6: { name: 'Agosto', value: 125 },
    7: { name: 'Setembro', value: 125 },
    8: { name: 'Outubro', value: 125 },
    9: { name: 'Novembro', value: 125 }
  };

  const partyGoals = [
    { id: 'chacara', label: 'Chácara', icon: '🏡', target: 5000, cumulativeTarget: 5000 },
    { id: 'buffet', label: 'Buffet', icon: '🍽️', target: 6700, cumulativeTarget: 11700 }, 
    { id: 'decoracao', label: 'Decoração', icon: '🎈', target: 3500, cumulativeTarget: 15200 }, 
    { id: 'openbar', label: 'Open Bar', icon: '🍻', target: 4000, cumulativeTarget: 19200 }, 
    { id: 'meta_final', label: 'Meta Final do Baile', icon: '🎓', target: 20800, cumulativeTarget: 40000 }
  ];

  const getCurrentPixCode = () => {
    if (!selectedPaymentMonth) return "";
    return selectedPaymentMonth <= 5 ? PIX_1_A_4 : PIX_5_A_8;
  };

  const currentPixCode = getCurrentPixCode();
  const qrCodeUrl = currentPixCode ? `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(currentPixCode)}` : "";

  // Contagem Decrescente Effect
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = DATA_DO_BAILE - now;
      if (distance > 0) {
        setTimeLeft({
          d: Math.floor(distance / (1000 * 60 * 60 * 24)),
          h: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          m: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          s: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
        setLoading(false);
      } else {
         try {
            if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
               await signInWithCustomToken(auth, __initial_auth_token);
            } else {
               await signInAnonymously(auth);
            }
         } catch(e) {
             console.error("Auth falhou, tentando anônimo", e);
             try { await signInAnonymously(auth); } catch(ex) {}
         }
         setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const usersRef = collection(db, 'artifacts', appId, 'public', 'data', 'client_users');
    const unsubUsers = onSnapshot(usersRef, (snapshot) => {
      const uList: any[] = [];
      snapshot.forEach(doc => uList.push({ id: doc.id, ...doc.data() }));
      setUsersList(uList);
    }, (err) => console.error(err));

    const installmentsRef = collection(db, 'artifacts', appId, 'public', 'data', 'installments');
    const unsubInstallments = onSnapshot(installmentsRef, (snapshot) => {
      const instList: any[] = [];
      let currentTotal = 0;
      snapshot.forEach(doc => {
          const data = doc.data();
          instList.push({ id: doc.id, ...data });
          
          if(data.status === 'paid' && monthData[data.month]) {
              currentTotal += monthData[data.month].value;
          } else if (data.status === 'partial') {
              currentTotal += 60; // Parcela de 1 dia!
          }
      });
      setInstallments(instList);
      
      const achievedGoals = partyGoals.filter(g => currentTotal >= g.cumulativeTarget).map(g => g.cumulativeTarget);
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

    // Despesas listener
    const expRef = collection(db, 'artifacts', appId, 'public', 'data', 'expenses');
    const unsubExpenses = onSnapshot(expRef, (snapshot) => {
      setExpenses(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }, (err) => console.error(err));

    // Enquetes listener
    const pollsRef = collection(db, 'artifacts', appId, 'public', 'data', 'polls');
    const unsubPolls = onSnapshot(pollsRef, (snapshot) => {
      setPolls(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }, (err) => console.error(err));

    return () => { unsubUsers(); unsubInstallments(); unsubExpenses(); unsubPolls(); };
  }, [user, lastCompletedGoal]);

  const handleGoogleLogin = async () => {
    try {
      setLoginError('');
      const provider = new GoogleAuthProvider();
      await setPersistence(auth, browserLocalPersistence);
      await signInWithPopup(auth, provider);
    } catch (error: any) { 
      console.error("Erro detalhado do Google:", error);
      if (error.code === 'auth/popup-closed-by-user') {
        setLoginError("O pop-up de login foi fechado antes de concluir.");
      } else if (error.code === 'auth/unauthorized-domain') {
        setLoginError("Domínio não autorizado. Adicione este link no Firebase.");
      } else {
        setLoginError("Erro de segurança. Abra num navegador externo ou tente novamente.");
      }
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    window.location.reload();
  };

  const handleSaveProfile = async (e: any) => {
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

  const handleAdminSubmit = (e?: any) => {
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
      const instsToDelete = installments.filter(i => i.userId === studentToDelete.id);
      for (const inst of instsToDelete) {
        await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'installments', inst.id));
      }
      await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'client_users', studentToDelete.id));
      
      setStudentToDelete(null);
    } catch (error) {
      console.error("Erro ao apagar aluno:", error);
    }
  };

  // Funções Admin Despesas & Enquetes
  const handleAddExpense = async () => {
      if (!newExpense.desc || !newExpense.val) return;
      try {
          await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'expenses'), {
              desc: newExpense.desc,
              value: Number(newExpense.val),
              date: new Date().toISOString()
          });
          setNewExpense({ desc: '', val: '' });
      } catch (e) { console.error(e); }
  };

  const handleDeleteExpense = async (id: string) => {
      try { await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'expenses', id)); } catch(e) {}
  };

  const handleAddPoll = async () => {
      if (!newPoll.question || !newPoll.option1 || !newPoll.option2) return;
      try {
          await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'polls'), {
              question: newPoll.question,
              options: [{ id: 1, text: newPoll.option1 }, { id: 2, text: newPoll.option2 }],
              votes: {},
              active: true,
              createdAt: new Date().toISOString()
          });
          setNewPoll({ question: '', option1: '', option2: '' });
      } catch (e) { console.error(e); }
  };

  const handleDeletePoll = async (id: string) => {
      try { await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'polls', id)); } catch(e) {}
  };

  const handleVote = async (pollId: string, optionId: number) => {
      if (!user) return;
      try {
          const poll = polls.find(p => p.id === pollId);
          if (!poll) return;
          const updatedVotes = { ...poll.votes, [user.uid]: optionId };
          await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'polls', pollId), { votes: updatedVotes }, { merge: true });
          fireConfetti();
      } catch (e) { console.error(e); }
  };

  const fireConfetti = () => {
    const triggerConfetti = () => {
      const duration = 2000;
      const end = Date.now() + duration;
      
      (function frame() {
        (window as any).confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.6 },
          colors: ['#C41E1E', '#000000', '#ffffff'],
          zIndex: 999999
        });
        (window as any).confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.6 },
          colors: ['#C41E1E', '#000000', '#ffffff'],
          zIndex: 999999
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    };

    if (!(window as any).confetti) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js';
      script.onload = triggerConfetti;
      document.body.appendChild(script);
    } else {
      triggerConfetti();
    }
  };

  const fireEpicConfetti = () => {
      const triggerEpic = () => {
          const duration = 8000; 
          const end = Date.now() + duration;
          
          (function frame() {
            (window as any).confetti({
              particleCount: 8,
              angle: 60,
              spread: 55,
              origin: { x: 0, y: 0.6 },
              colors: ['#C41E1E', '#000000', '#ffffff'],
              zIndex: 999999
            });
            (window as any).confetti({
              particleCount: 8,
              angle: 120,
              spread: 55,
              origin: { x: 1, y: 0.6 },
              colors: ['#C41E1E', '#000000', '#ffffff'],
              zIndex: 999999
            });
            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          }());
      };
      
      if (!(window as any).confetti) {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js';
          script.onload = triggerEpic;
          document.body.appendChild(script);
      } else {
          triggerEpic();
      }
  };

  const updateAdminInstStatus = async (newStatus: string) => {
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

        if ((newStatus === 'paid' || newStatus === 'partial') && inst?.status !== newStatus) {
            fireConfetti();
        }

        setAdminManageInst((prev: any) => ({...prev, inst: {...prev.inst, id: targetInstId, status: newStatus}}));
    } catch (error) {
        console.error(error);
    }
  };

  const handleReceiptUpload = (e: any) => {
      const { client, month, inst } = adminManageInst;
      const targetInstId = inst?.id || `${client.id}_month_${month}`;
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event: any) => {
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
              if (ctx) ctx.drawImage(img, 0, 0, width, height);

              const base64Str = canvas.toDataURL('image/jpeg', 0.6);

              const instRef = doc(db, 'artifacts', appId, 'public', 'data', 'installments', targetInstId);
              setDoc(instRef, {
                  userId: client.id,
                  userName: client.name,
                  month: month,
                  receipt: base64Str,
                  status: inst?.status || 'review'
              }, { merge: true });

              setAdminManageInst((prev: any) => ({...prev, inst: {...prev.inst, id: targetInstId, receipt: base64Str, status: prev.inst?.status || 'review'}}));
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
      setAdminManageInst((prev: any) => ({...prev, inst: {...prev.inst, receipt: null}}));
  };

  const handleDeclarePayment = async (month: number) => {
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

  const exportToCSV = () => {
    if (usersList.length === 0) {
      alert("Não há dados para exportar ainda.");
      return;
    }
    let csvContent = "Nome do Aluno,Turma,Status";
    for(let m = 1; m <= 9; m++) {
      csvContent += `,Mes_${m}_${monthData[m].name}`;
    }
    csvContent += ",Total_Pago,Valor_Arrecadado(R$)\n";

    usersList.forEach(client => {
      const clientInsts = installments.filter(i => i.userId === client.id);
      let row = `"${client.name}","${client.class || 'N/A'}","Registado"`;
      let totalPagas = 0;
      let valorArrecadado = 0;

      for (let m = 1; m <= 9; m++) {
        const inst = clientInsts.find(i => i.month === m);
        let statusText = 'PENDENTE';
        if(inst?.status === 'paid') statusText = 'PAGO INTEGRAL';
        if(inst?.status === 'partial') statusText = 'PAGO (1 DIA - R$60)';
        if(inst?.status === 'review') statusText = 'EM ANALISE';
        if(inst?.status === 'canceled') statusText = 'CANCELADO';
        
        row += `,"${statusText}"`;
        if (inst?.status === 'paid') {
          totalPagas++;
          valorArrecadado += monthData[m].value;
        } else if (inst?.status === 'partial') {
          valorArrecadado += 60;
        }
      }
      row += `,"${totalPagas}/9","R$ ${valorArrecadado},00"\n`;
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

  const getInstallmentStatus = (month: number) => {
    const inst = installments.find(i => i.userId === user?.uid && i.month === month);
    return inst ? inst.status : 'pending';
  };

  const isUnlocked = (month: number) => {
    if (month === 1) return true;
    const prevStatus = getInstallmentStatus(month - 1);
    return prevStatus === 'paid' || prevStatus === 'partial'; 
  };

  const getUserBadges = (uid: string) => {
    const userInsts = installments.filter(i => i.userId === uid && (i.status === 'paid' || i.status === 'partial'));
    const fullPaidInsts = installments.filter(i => i.userId === uid && i.status === 'paid');
    const hasVoted = polls.some(p => p.votes && p.votes[uid] !== undefined);
    
    const b = [];
    
    // Conquistas de Parcelas
    if (userInsts.length >= 1) b.push({ icon: '🐣', name: 'Ligeirinho', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' });
    if (userInsts.length >= 3) b.push({ icon: '🚀', name: 'No Pique', color: 'bg-blue-100 text-blue-700 border-blue-200' });
    if (userInsts.length >= 5) b.push({ icon: '🔥', name: 'Metade do Caminho', color: 'bg-orange-100 text-orange-700 border-orange-200' });
    if (userInsts.length >= 7) b.push({ icon: '💎', name: 'Ostentação', color: 'bg-cyan-100 text-cyan-700 border-cyan-200' });
    if (userInsts.length === 9) b.push({ icon: '👑', name: 'Patrão da Festa', color: 'bg-amber-100 text-amber-700 border-amber-200' });
    
    // Conquistas Especiais
    if (fullPaidInsts.length >= 3 && fullPaidInsts.length === userInsts.length) {
        b.push({ icon: '⭐', name: 'Pagador Raiz', color: 'bg-purple-100 text-purple-700 border-purple-200' });
    }
    if (hasVoted) {
        b.push({ icon: '🗣️', name: 'Voz Ativa', color: 'bg-pink-100 text-pink-700 border-pink-200' });
    }

    return b;
  };

  const calculateDynamicProgress = () => {
    const paidInsts = installments.filter(i => i.status === 'paid' || i.status === 'partial');
    let currentTotalValue = 0;
    paidInsts.forEach(inst => {
      if (inst.status === 'paid' && monthData[inst.month]) {
          currentTotalValue += monthData[inst.month].value;
      } else if (inst.status === 'partial') {
          currentTotalValue += 60;
      }
    });

    const totalExpVal = expenses.reduce((acc, curr) => acc + Number(curr.value), 0);

    const MAX_GOAL = 40000;
    const percentGeneral = Math.min(Math.round((currentTotalValue / MAX_GOAL) * 100), 100);

    let currentActiveGoal = partyGoals[partyGoals.length - 1]; 
    let previousCumulativeGoalValue = 0;

    for (let i = 0; i < partyGoals.length; i++) {
        if (currentTotalValue < partyGoals[i].cumulativeTarget) {
            currentActiveGoal = partyGoals[i];
            previousCumulativeGoalValue = i > 0 ? partyGoals[i-1].cumulativeTarget : 0;
            break;
        }
    }

    const currentProgressInStep = Math.max(0, currentTotalValue - previousCumulativeGoalValue);
    const percentTarget = currentActiveGoal.target > 0 
      ? Math.min(Math.round((currentProgressInStep / currentActiveGoal.target) * 100), 100) 
      : 100;
      
    const missingForNextGoal = currentActiveGoal.target - currentProgressInStep;

    return { 
        totalValue: currentTotalValue, 
        totalExpenses: totalExpVal,
        balance: currentTotalValue - totalExpVal,
        maxGoal: MAX_GOAL,
        percentGeneral: percentGeneral,
        activeGoalLabel: currentActiveGoal.label,
        activeGoalIcon: currentActiveGoal.icon,
        activeGoalTarget: currentActiveGoal.target,
        currentProgressInStep: currentProgressInStep,
        percentTarget: percentTarget,
        missingForNextGoal: missingForNextGoal > 0 ? missingForNextGoal : 0
    };
  };

  const getGlobalStats = () => {
    const total = usersList.length * 9;
    if (total === 0) return { paidPct: 0, partialPct: 0, reviewPct: 0, pendingPct: 0, paid: 0, partial: 0, review: 0 };
    const paid = installments.filter(i => i.status === 'paid').length;
    const partial = installments.filter(i => i.status === 'partial').length;
    const review = installments.filter(i => i.status === 'review').length;
    const pending = total - paid - partial - review;
    return {
      paid, partial, review, pending,
      paidPct: Math.round((paid/total)*100),
      partialPct: Math.round((partial/total)*100),
      reviewPct: Math.round((review/total)*100),
      pendingPct: Math.round((pending/total)*100)
    };
  };

  const getClassPerformance = () => {
    const classes = ['3º Ano A', '3º Ano B', '3º Ano Noturno'];
    return classes.map(c => {
      const classUsers = usersList.filter(u => u.class === c);
      const classTotalInsts = classUsers.length * 9;
      if (classTotalInsts === 0) return { name: c, pct: 0 };
      const classUserIds = classUsers.map(u => u.id);
      const classPaidInsts = installments.filter(i => classUserIds.includes(i.userId) && (i.status === 'paid' || i.status === 'partial')).length;
      return { name: c, pct: Math.round((classPaidInsts/classTotalInsts)*100) };
    });
  };

  const progressData = calculateDynamicProgress();
  const globalStats = getGlobalStats();
  const classPerformance = getClassPerformance();
  const userBadges = user ? getUserBadges(user.uid) : [];
  
  const searchFilteredUsers = usersList.filter(u => {
      const matchClass = filterClass === 'Todas as Turmas' || u.class === filterClass;
      const matchName = u.name?.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchStatus = true;
      const clientInsts = installments.filter(i => i.userId === u.id);
      
      if (filterStatus === 'Em Análise') {
          matchStatus = clientInsts.some(i => i.status === 'review');
      } else if (filterStatus === 'Pendentes') {
          const paidCount = clientInsts.filter(i => i.status === 'paid' || i.status === 'partial').length;
          const hasReview = clientInsts.some(i => i.status === 'review');
          matchStatus = paidCount < 9 && !hasReview; 
      } else if (filterStatus === 'Concluídos') {
          const paidCount = clientInsts.filter(i => i.status === 'paid' || i.status === 'partial').length;
          matchStatus = paidCount === 9;
      } else if (filterStatus === 'Parciais') {
          matchStatus = clientInsts.some(i => i.status === 'partial');
      }
      
      return matchClass && matchName && matchStatus;
  });

  const renderAdminModal = () => {
    if (!showAdminModal) return null;
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999999] flex items-center justify-center p-4">
        <div className="bg-white/95 backdrop-blur-2xl w-full max-w-sm rounded-[2.5rem] ios-shadow overflow-hidden border border-white/20 animate-in zoom-in duration-200 relative">
          <div className="p-6 text-center relative border-b border-gray-100">
            <button type="button" onClick={(e) => { e.stopPropagation(); setShowAdminModal(false); }} className="absolute right-6 top-6 bg-gray-100 text-gray-500 hover:text-black rounded-full p-2 transition cursor-pointer z-10"><IconX size={16} /></button>
            <div className="w-16 h-16 bg-[#C41E1E]/10 text-[#C41E1E] rounded-full flex items-center justify-center mx-auto mb-4 relative"><IconLock size={28} /><span className="absolute -top-1 -right-1 text-black text-xs">✦</span></div>
            <h3 className="text-xl font-bold tracking-tight text-black uppercase">Cofre do Terceirão</h3>
          </div>
          
          <div className="p-6 space-y-4">
            {adminError && <div className="text-[#C41E1E] text-xs text-center bg-red-50 py-3 rounded-2xl font-bold uppercase border border-red-100">{adminError}</div>}
            <input 
               type="text" 
               placeholder="Utilizador" 
               value={adminForm.user} 
               onChange={(e) => setAdminForm(prev => ({...prev, user: e.target.value}))} 
               onKeyDown={(e) => e.key === 'Enter' && handleAdminSubmit(e)}
               className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:bg-gray-100 outline-none transition font-medium text-black shadow-inner" 
            />
            <input 
               type="password" 
               placeholder="Palavra-passe" 
               value={adminForm.pass} 
               onChange={(e) => setAdminForm(prev => ({...prev, pass: e.target.value}))} 
               onKeyDown={(e) => e.key === 'Enter' && handleAdminSubmit(e)}
               className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:bg-gray-100 outline-none transition font-medium text-black shadow-inner" 
            />
            <button 
               type="button" 
               onClick={handleAdminSubmit} 
               className="w-full bg-black text-white font-bold py-5 rounded-full hover:bg-[#C41E1E] transition active:scale-95 shadow-lg uppercase tracking-widest text-xs cursor-pointer"
            >
               Acessar Painel
            </button>
          </div>
        </div>
      </div>
    );
  };

  const EpicCountdown = () => (
    <div className="flex gap-2 sm:gap-4 justify-center my-6 relative z-30 animate-in fade-in slide-in-from-top-4 duration-1000">
      {[
        { label: 'Dias', value: timeLeft.d },
        { label: 'Horas', value: timeLeft.h },
        { label: 'Min', value: timeLeft.m },
        { label: 'Seg', value: timeLeft.s }
      ].map((item, idx) => (
        <div key={idx} className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 min-w-[4rem] sm:min-w-[5.5rem] flex flex-col items-center ios-shadow border border-white">
          <span className="text-2xl sm:text-4xl font-black text-[#C41E1E] tracking-tighter">{String(item.value).padStart(2, '0')}</span>
          <span className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">{item.label}</span>
        </div>
      ))}
    </div>
  );

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

  if ((!user || user.isAnonymous) && !isAdmin) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F5F4EF] font-sans relative overflow-hidden">
        <GlobalCSSReset />
        <BackgroundIdentity />
        
        <div className="absolute top-6 right-6 z-[99999]">
          <button 
            type="button"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowAdminModal(true); }} 
            className="flex items-center gap-2 px-4 py-2.5 bg-white/60 backdrop-blur-md text-gray-800 rounded-full ios-shadow border border-white/40 hover:bg-white transition active:scale-95 font-semibold text-xs uppercase tracking-widest cursor-pointer"
          >
            <IconShieldCheck size={16} className="text-[#C41E1E]" /> Admin
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-4 max-w-5xl mx-auto w-full relative z-10">
          <HeroArtwork />
          <EpicCountdown />
          <div className="bg-white/90 backdrop-blur-xl p-8 w-full max-w-sm rounded-[2.5rem] ios-shadow animate-in slide-in-from-bottom-8 duration-500 border border-white/60 mt-4 z-30">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-black tracking-tighter mb-2 uppercase">Acesso do Formando</h2>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">Inicia sessão com o teu Google para conferir o teu carnê personalizado.</p>
            </div>
            {loginError && <div className="bg-red-50 text-[#C41E1E] p-4 rounded-2xl text-[10px] mb-6 flex items-center gap-2 font-bold uppercase tracking-tight border border-[#C41E1E]/10 italic"><IconAlertCircle size={14} className="flex-shrink-0" /> {loginError}</div>}
            <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 bg-black text-white font-black py-4 px-4 rounded-full hover:bg-gray-800 transition active:scale-95 shadow-xl shadow-black/20 uppercase tracking-tighter cursor-pointer">Entrar com Google</button>
          </div>
        </div>

        {renderAdminModal()}
      </div>
    );
  }

  if (user && !user.isAnonymous && !currentUserData && !isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F4EF] p-4 font-sans relative overflow-hidden">
        <GlobalCSSReset />
        <BackgroundIdentity />
        <HeroArtwork />

        <div className="absolute top-6 right-6 z-[99999]">
          <button 
            type="button"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowAdminModal(true); }} 
            className="flex items-center gap-2 px-4 py-2.5 bg-white/60 backdrop-blur-md text-gray-800 rounded-full ios-shadow border border-white/40 hover:bg-white transition active:scale-95 font-semibold text-xs uppercase tracking-widest cursor-pointer"
          >
            <IconShieldCheck size={16} className="text-[#C41E1E]" /> Admin
          </button>
        </div>

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

        {renderAdminModal()}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F4EF] font-sans text-black pb-20 relative overflow-x-hidden">
      <GlobalCSSReset />
      <BackgroundIdentity />

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

      <header className="fixed top-0 w-full bg-[#F5F4EF]/85 backdrop-blur-xl z-[500] px-6 py-4 border-b border-black/5">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-9 h-9 bg-white rounded-[0.8rem] flex items-center justify-center ios-shadow text-[#C41E1E] font-serif font-black text-lg relative overflow-hidden">✦</div>
             <span className="font-black tracking-tighter text-gray-800 uppercase text-sm">Controle Terceirão</span>
          </div>
          <div className="flex items-center gap-2 relative z-[99999]">
            {isAdmin ? (
              <button onClick={() => setIsAdmin(false)} className="px-5 py-2.5 bg-black text-white rounded-full text-[10px] font-black hover:bg-[#C41E1E] transition active:scale-95 uppercase tracking-widest cursor-pointer">Sair Admin</button>
            ) : (
              <>
                <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowAdminModal(true); }} className="w-10 h-10 bg-white text-gray-400 rounded-full flex items-center justify-center ios-shadow hover:text-[#C41E1E] transition active:scale-95 shadow-sm border border-black/5 cursor-pointer"><IconShieldCheck size={18} /></button>
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
                    Faltam <span className="text-black font-black">R$ {progressData.missingForNextGoal.toLocaleString('pt-BR')},00</span> de um total de R$ {progressData.activeGoalTarget.toLocaleString('pt-BR')} para esta etapa!
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
                    <div key={goal.cumulativeTarget} className="absolute top-0 h-full w-[2px] bg-white/40 z-10" style={{ left: `${(goal.cumulativeTarget / progressData.maxGoal) * 100}%` }}></div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-6">
                  {partyGoals.map(m => {
                    const achieved = progressData.totalValue >= m.cumulativeTarget;
                    const isCurrentTarget = m.label === progressData.activeGoalLabel;
                    
                    return (
                      <div key={m.cumulativeTarget} className={`px-3 py-1.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest border transition-all 
                        ${achieved ? 'bg-green-50 text-green-600 border-green-200 shadow-sm opacity-100' : 
                          isCurrentTarget ? 'bg-red-50 text-[#C41E1E] border-red-200 animate-pulse' : 
                          'bg-gray-50 text-gray-300 border-gray-100 opacity-60'}`}
                      >
                        {achieved ? '✅' : m.icon} {m.label} ({m.target >= 1000 ? (m.target/1000) + 'k' : m.target})
                      </div>
                    )
                  })}
                </div>

                {/* PAINEL DE DESPESAS TRANSPARENTE (VISÃO DO ALUNO) */}
                <div className="bg-red-50/50 p-4 sm:p-5 rounded-3xl border border-red-100 flex flex-col sm:flex-row items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white text-[#C41E1E] flex items-center justify-center shadow-sm flex-shrink-0"><IconReceipt size={24}/></div>
                    <div className="flex-1 w-full text-center sm:text-left">
                        <h4 className="font-black text-[11px] uppercase tracking-widest text-red-800 mb-2">Transparência Financeira</h4>
                        <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                            <div>
                                <span className="block text-[9px] font-bold text-red-400 uppercase">Arrecadado</span>
                                <span className="font-black text-sm text-black">R$ {progressData.totalValue.toLocaleString('pt-BR')},00</span>
                            </div>
                            <div className="w-px bg-red-200 hidden sm:block"></div>
                            <div>
                                <span className="block text-[9px] font-bold text-red-400 uppercase">Gasto</span>
                                <span className="font-black text-sm text-[#C41E1E]">R$ {progressData.totalExpenses.toLocaleString('pt-BR')},00</span>
                            </div>
                            <div className="w-px bg-red-200 hidden sm:block"></div>
                            <div>
                                <span className="block text-[9px] font-bold text-red-400 uppercase">Saldo em Caixa</span>
                                <span className="font-black text-sm text-green-600">R$ {progressData.balance.toLocaleString('pt-BR')},00</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
          </div>
        )}

        {!isAdmin ? (
          <div className="space-y-6 w-full">
            <HeroArtwork />
            <EpicCountdown />
            <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-[2.5rem] ios-shadow flex flex-col sm:flex-row justify-between items-center gap-6 border border-white/60 relative z-30 shadow-2xl shadow-black/5 w-full">
              <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                {user?.photoURL ? <img src={user.photoURL} alt="Perfil" className="w-16 h-16 rounded-full shadow-md border-2 border-white" /> : <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-inner"><IconUser size={28} className="text-[#C41E1E]/30"/></div>}
                <div>
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tighter text-black flex flex-col sm:flex-row items-center gap-2 justify-center sm:justify-start uppercase">
                        {currentUserData?.name || user?.displayName || 'Aluno'} <span className="text-[#C41E1E] text-xl hidden sm:inline">✦</span>
                    </h2>
                    <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-1">{currentUserData?.class || 'Turma não informada'} • VIP Formando</p>
                    
                    {/* BADGES DO USUÁRIO */}
                    {userBadges.length > 0 && (
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                            {userBadges.map((b, i) => (
                                <div key={i} className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1 border shadow-sm ${b.color}`}>
                                    <span>{b.icon}</span> {b.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
              </div>
              <div className="w-full sm:w-auto bg-[#F5F4EF] px-10 py-5 rounded-[1.8rem] flex flex-col items-center border border-black/5 shadow-inner">
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Pagos</p>
                <p className="text-3xl font-black text-black tracking-tighter">{installments.filter(i => i.userId === user?.uid && (i.status === 'paid' || i.status === 'partial')).length} <span className="text-xl text-[#C41E1E] opacity-50">/ 9</span></p>
              </div>
            </div>

            {/* SISTEMA DE ENQUETES (VISÃO DO ALUNO) - MOVIDO PARA CIMA */}
            {polls.filter(p => p.active).length > 0 && (
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-[2.5rem] ios-shadow border border-white/60 w-full">
                <div className="flex gap-4 items-center mb-6">
                  <div className="bg-[#C41E1E] p-4 rounded-2xl flex-shrink-0 text-white shadow-lg"><IconVote size={24} /></div>
                  <h3 className="font-black text-xl text-black uppercase tracking-tighter">Votações Oficiais</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {polls.filter(p => p.active).map(poll => {
                        const hasVoted = poll.votes?.[user?.uid] !== undefined;
                        const totalVotes = Object.keys(poll.votes || {}).length;
                        
                        return (
                            <div key={poll.id} className="bg-[#F5F4EF] p-5 rounded-3xl border border-white shadow-inner">
                                <h4 className="font-black text-black tracking-tight mb-4 uppercase">{poll.question}</h4>
                                {hasVoted ? (
                                    <div className="space-y-3">
                                        {poll.options.map((opt: any) => {
                                            const optionVotes = Object.values(poll.votes || {}).filter(v => v === opt.id).length;
                                            const pct = totalVotes > 0 ? Math.round((optionVotes / totalVotes) * 100) : 0;
                                            const isMyVote = poll.votes?.[user?.uid] === opt.id;
                                            return (
                                                <div key={opt.id} className="relative">
                                                    <div className="flex justify-between text-[10px] font-bold mb-1 uppercase tracking-widest z-10 relative px-2 pt-1">
                                                        <span>{opt.text} {isMyVote && '(O teu voto)'}</span>
                                                        <span>{pct}%</span>
                                                    </div>
                                                    <div className="w-full h-8 bg-white rounded-xl overflow-hidden shadow-sm absolute top-0 left-0">
                                                        <div style={{width: `${pct}%`}} className={`h-full transition-all duration-1000 ${isMyVote ? 'bg-amber-300' : 'bg-gray-200'}`}></div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                        <p className="text-right text-[9px] font-bold text-gray-400 uppercase mt-2">{totalVotes} Votos computados</p>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        {poll.options.map((opt: any) => (
                                            <button 
                                                key={opt.id} 
                                                onClick={() => handleVote(poll.id, opt.id)}
                                                className="w-full py-3 px-4 bg-white border border-gray-200 rounded-xl font-bold text-sm text-gray-700 hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700 transition active:scale-95 text-left flex justify-between items-center cursor-pointer"
                                            >
                                                {opt.text}
                                                <IconCircle size={16} className="text-gray-300" />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
              </div>
            )}

            {/* GUERRA DAS TURMAS */}
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

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((m) => {
                const status = getInstallmentStatus(m);
                const isPaid = status === 'paid';
                const isPartial = status === 'partial'; 
                const isReview = status === 'review';
                const isCanceled = status === 'canceled'; 
                const unlocked = isUnlocked(m);
                const currentMonthData = monthData[m];
                
                return (
                  <div key={m} className={`bg-white/95 backdrop-blur-md p-7 rounded-[2.5rem] flex flex-col transition-all duration-300 border border-white/50 w-full 
                    ${isPaid ? 'ios-shadow ring-4 ring-[#C41E1E]/10 bg-gradient-to-b from-white to-red-50/20' : 
                      isPartial ? 'ios-shadow ring-4 ring-blue-100 bg-gradient-to-b from-white to-blue-50/30' :
                      isReview ? 'ios-shadow ring-4 ring-amber-100 bg-gradient-to-b from-white to-amber-50/30' : 
                      isCanceled ? 'ios-shadow ring-4 ring-red-100 bg-gradient-to-b from-white to-red-50/30' :
                      'ios-shadow hover:-translate-y-1 hover:shadow-xl'}`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Parcela 0{m}</span>
                        <h4 className="text-2xl font-black text-black tracking-tighter uppercase mt-1">{currentMonthData.name}</h4>
                        <p className={`text-xl font-black mt-1 tracking-tighter ${!unlocked && !isPaid && !isPartial && !isReview && !isCanceled ? 'text-gray-300' : 'text-[#C41E1E]'}`}>R$ {currentMonthData.value}</p>
                      </div>
                      {isPaid ? <IconCheckCircle2 className="text-[#C41E1E]" size={28} /> : 
                       isPartial ? <IconCheckCircle2 className="text-blue-500" size={28} /> : 
                       isReview ? <IconClock className="text-amber-500" size={28} /> :
                       isCanceled ? <IconX className="text-red-500" size={28} /> :
                       !unlocked ? <IconLock className="text-gray-200" size={28} /> :
                       <IconCircle className="text-gray-300" size={28} />}
                    </div>
                    <div className="mt-auto">
                      {isPaid ? (
                        <div className="w-full py-4 bg-[#C41E1E]/10 text-[#C41E1E] rounded-[1.2rem] text-center font-black uppercase text-[10px] tracking-widest">CONCLUÍDO</div>
                      ) : isPartial ? (
                        <div className="w-full py-4 bg-blue-100 text-blue-600 rounded-[1.2rem] text-center font-black uppercase text-[10px] tracking-widest border border-blue-200">1 DIA (R$ 60)</div>
                      ) : isReview ? (
                        <div className="w-full py-4 bg-amber-50 text-amber-600 rounded-[1.2rem] text-center font-bold text-[10px] tracking-widest uppercase italic">Em Análise</div>
                      ) : isCanceled ? (
                        <button onClick={() => { setSelectedPaymentMonth(m); setTermsAccepted(false); }} className="w-full py-4 bg-red-100 text-red-600 rounded-[1.2rem] text-center font-black text-[10px] tracking-widest flex items-center justify-center gap-2 cursor-pointer border border-red-200 uppercase hover:bg-red-200 transition">
                          Refazer Pagamento
                        </button>
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
            
            {!isUnlocked(2) && !installments.find(i => i.userId === user?.uid && i.month === 1 && (i.status === 'paid' || i.status === 'partial')) && (
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

            {/* ABAS DO ADMIN */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide px-2">
                <button onClick={() => setAdminTab('alunos')} className={`px-6 py-4 rounded-[1.5rem] text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all active:scale-95 flex items-center gap-2 cursor-pointer ${adminTab === 'alunos' ? 'bg-[#C41E1E] text-white shadow-lg' : 'bg-white text-gray-500 border border-white hover:bg-gray-50 ios-shadow'}`}><IconUser size={16}/> Formandos</button>
                <button onClick={() => setAdminTab('despesas')} className={`px-6 py-4 rounded-[1.5rem] text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all active:scale-95 flex items-center gap-2 cursor-pointer ${adminTab === 'despesas' ? 'bg-[#C41E1E] text-white shadow-lg' : 'bg-white text-gray-500 border border-white hover:bg-gray-50 ios-shadow'}`}><IconReceipt size={16}/> Despesas</button>
                <button onClick={() => setAdminTab('enquetes')} className={`px-6 py-4 rounded-[1.5rem] text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all active:scale-95 flex items-center gap-2 cursor-pointer ${adminTab === 'enquetes' ? 'bg-[#C41E1E] text-white shadow-lg' : 'bg-white text-gray-500 border border-white hover:bg-gray-50 ios-shadow'}`}><IconVote size={16}/> Enquetes</button>
            </div>

            {adminTab === 'alunos' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in">
                  <div className="bg-white rounded-[3rem] p-8 ios-shadow border border-white/60 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-6">
                       <div className="flex items-center gap-2"><IconPieChart size={20} className="text-[#C41E1E]"/><h3 className="font-black text-black uppercase tracking-tighter">Status Global</h3></div>
                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{usersList.length * 9} Parcelas</span>
                    </div>
                    <div className="w-full h-8 flex rounded-full overflow-hidden shadow-inner mb-4 bg-gray-100">
                       <div style={{width: `${globalStats.paidPct}%`}} className="bg-green-500 h-full transition-all duration-1000" title="Pago Integral"></div>
                       <div style={{width: `${globalStats.partialPct}%`}} className="bg-blue-400 h-full transition-all duration-1000" title="Parciais (R$60)"></div>
                       <div style={{width: `${globalStats.reviewPct}%`}} className="bg-amber-400 h-full transition-all duration-1000" title="Em Análise"></div>
                       <div style={{width: `${globalStats.pendingPct}%`}} className="bg-gray-200 h-full transition-all duration-1000" title="Pendente"></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest flex-wrap gap-2">
                      <div className="flex items-center gap-1 text-green-600"><div className="w-2 h-2 rounded-full bg-green-500"></div> Pagos ({globalStats.paidPct}%)</div>
                      <div className="flex items-center gap-1 text-blue-600"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Parciais ({globalStats.partialPct}%)</div>
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

                <div className="bg-[#C41E1E] p-8 rounded-[3rem] ios-shadow border border-[#C41E1E]/50 flex flex-col sm:flex-row justify-between items-center text-white relative overflow-hidden animate-in fade-in">
                  <div className="absolute -bottom-10 -right-10 text-white/10 rotate-12 pointer-events-none"><IconDownload size={140}/></div>
                  <div className="relative z-10 mb-4 sm:mb-0 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-2"><IconDownload size={24} className="text-white" /><h3 className="font-black text-xl uppercase tracking-tighter">Exportar Dados</h3></div>
                    <p className="text-white/80 font-medium text-sm">Descarrega a tabela com todas as parcelas prontas para usar no Excel.</p>
                  </div>
                  <button onClick={exportToCSV} className="text-xs font-black bg-white text-[#C41E1E] px-8 py-4 rounded-full active:scale-95 flex items-center justify-center gap-2 shadow-xl uppercase tracking-widest relative z-10 hover:bg-black hover:text-white transition cursor-pointer whitespace-nowrap">⬇️ Descarregar .CSV</button>
                </div>

                <div className="bg-white rounded-[3rem] ios-shadow overflow-hidden p-4 border border-white animate-in fade-in">
                  <div className="p-4 sm:p-6 pb-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                      <h3 className="font-black text-2xl text-black tracking-tighter uppercase italic whitespace-nowrap">Formandos ({searchFilteredUsers.length})</h3>
                      <div className="relative w-full sm:w-auto">
                        <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input type="text" placeholder="Procurar aluno..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full sm:w-64 pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-xs font-bold text-black focus:outline-none focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100 transition-all shadow-inner" />
                      </div>
                    </div>
                    
                    {/* FILTROS DE TURMA E STATUS NO ADMIN */}
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                          {['Todas as Turmas', '3º Ano A', '3º Ano B', '3º Ano Noturno'].map(t => (
                            <button key={t} onClick={() => setFilterClass(t)} className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all active:scale-95 flex items-center gap-2 cursor-pointer ${filterClass === t ? 'bg-black text-white shadow-md' : 'bg-gray-50 text-gray-500 border border-gray-200 hover:bg-gray-100'}`}>
                              {filterClass === t && <IconFilter size={12}/>} {t}
                            </button>
                          ))}
                        </div>
                        
                        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
                          {['Todos', 'Em Análise', 'Pendentes', 'Parciais', 'Concluídos'].map(s => (
                            <button key={s} onClick={() => setFilterStatus(s)} className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest whitespace-nowrap transition-all active:scale-95 flex items-center gap-2 cursor-pointer ${filterStatus === s ? 'bg-[#C41E1E] text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'}`}>
                              {filterStatus === s && <IconFilter size={10}/>} {s}
                            </button>
                          ))}
                        </div>
                    </div>
                  </div>

                  <div className="divide-y divide-gray-50 px-2 sm:px-4">
                    {searchFilteredUsers.length === 0 && <p className="p-10 text-center text-gray-400 uppercase text-xs font-bold italic">Nenhum aluno registado ou encontrado nos filtros.</p>}
                    {searchFilteredUsers.map(client => {
                      const clientInsts = installments.filter(i => i.userId === client.id).sort((a, b) => a.month - b.month);
                      const paidCount = clientInsts.filter(i => i.status === 'paid' || i.status === 'partial').length;
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
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{paidCount}/9 pagamentos • {client.class || 'Turma N/A'}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                               <button onClick={() => setStudentToDelete({ id: client.id, name: client.name })} className="p-3 bg-gray-50 text-gray-400 rounded-full hover:bg-red-500 hover:text-white transition cursor-pointer shadow-sm border border-gray-200" title="Apagar Aluno do Sistema"><IconTrash size={14} /></button>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-3">
                            {[1,2,3,4,5,6,7,8,9].map(m => {
                              const inst = clientInsts.find(i => i.month === m);
                              const isPaid = inst?.status === 'paid';
                              const isPartial = inst?.status === 'partial';
                              const isReview = inst?.status === 'review';
                              const isCanceled = inst?.status === 'canceled'; 
                              const hasReceipt = inst?.receipt;

                              return (
                                <button key={m} onClick={() => setAdminManageInst({ client, month: m, inst })} className={`flex-1 min-w-[3.8rem] py-4 rounded-2xl flex flex-col items-center justify-center transition active:scale-90 shadow-sm cursor-pointer relative overflow-hidden 
                                    ${isPaid ? 'bg-green-50 text-green-600 border border-green-100' : 
                                      isPartial ? 'bg-blue-50 text-blue-600 border border-blue-200' :
                                      isReview ? 'bg-amber-100 text-amber-600 animate-pulse border border-amber-200 shadow-md ring-2 ring-amber-500/20' : 
                                      isCanceled ? 'bg-red-50 text-red-600 border border-red-200' :
                                      'bg-gray-50 text-gray-300 border border-gray-100 hover:bg-gray-200'}`}>
                                  <span className="text-[9px] font-black mb-1 text-black opacity-40 uppercase">M0{m}</span>
                                  
                                  {isPaid ? <IconCheckCircle2 size={20} /> : 
                                   isPartial ? <IconCheckCircle2 size={20} /> :
                                   isReview ? <IconClock size={20} /> : 
                                   isCanceled ? <IconX size={20} /> : 
                                   <IconCircle size={20} />}
                                   
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
              </>
            )}

            {adminTab === 'despesas' && (
                <div className="bg-white rounded-[3rem] p-6 sm:p-8 ios-shadow border border-white/60 animate-in fade-in slide-in-from-bottom-4">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3"><IconReceipt size={24} className="text-[#C41E1E]"/><h3 className="font-black text-2xl text-black uppercase tracking-tighter">Gestão de Despesas</h3></div>
                    </div>
                    
                    <div className="bg-[#F5F4EF] p-5 rounded-[2rem] border border-white shadow-inner mb-8 flex flex-col sm:flex-row gap-4">
                        <input type="text" placeholder="Ex: Sinal do Salão..." value={newExpense.desc} onChange={e => setNewExpense({...newExpense, desc: e.target.value})} className="flex-1 px-5 py-4 bg-white border border-gray-100 rounded-[1.5rem] text-sm font-bold text-black focus:outline-none focus:border-amber-400 transition-all shadow-sm" />
                        <input type="number" placeholder="Valor (R$)" value={newExpense.val} onChange={e => setNewExpense({...newExpense, val: e.target.value})} className="w-full sm:w-32 px-5 py-4 bg-white border border-gray-100 rounded-[1.5rem] text-sm font-bold text-black focus:outline-none focus:border-amber-400 transition-all shadow-sm" />
                        <button onClick={handleAddExpense} className="bg-black text-white px-8 py-4 rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-[#C41E1E] transition cursor-pointer shadow-lg shadow-black/20">Adicionar</button>
                    </div>

                    <div className="space-y-3">
                        {expenses.length === 0 && <p className="text-center text-gray-400 text-xs font-bold uppercase italic py-10">Nenhuma despesa registada.</p>}
                        {expenses.map(exp => (
                            <div key={exp.id} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-[1.5rem] hover:shadow-md transition">
                                <div>
                                    <p className="font-black text-sm uppercase text-black tracking-tight">{exp.desc}</p>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{new Date(exp.date).toLocaleDateString()}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="font-black text-[#C41E1E] text-lg tracking-tighter">R$ {exp.value},00</span>
                                    <button onClick={() => handleDeleteExpense(exp.id)} className="text-gray-300 hover:text-red-500 transition cursor-pointer p-2"><IconTrash size={16} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center px-4">
                        <span className="font-black uppercase tracking-widest text-gray-500 text-xs">Total Gasto:</span>
                        <span className="font-black uppercase tracking-tighter text-3xl text-[#C41E1E]">R$ {expenses.reduce((a,c) => a + Number(c.value), 0).toLocaleString('pt-BR')},00</span>
                    </div>
                </div>
            )}

            {adminTab === 'enquetes' && (
                <div className="bg-white rounded-[3rem] p-6 sm:p-8 ios-shadow border border-white/60 animate-in fade-in slide-in-from-bottom-4">
                    <div className="flex items-center gap-3 mb-8"><IconVote size={24} className="text-[#C41E1E]"/><h3 className="font-black text-2xl text-black uppercase tracking-tighter">Sistema de Enquetes</h3></div>
                    
                    <div className="bg-[#F5F4EF] p-5 sm:p-6 rounded-[2rem] border border-white shadow-inner mb-8 space-y-4">
                        <input type="text" placeholder="Qual a pergunta da enquete?" value={newPoll.question} onChange={e => setNewPoll({...newPoll, question: e.target.value})} className="w-full px-5 py-4 bg-white border border-gray-100 rounded-[1.5rem] text-sm font-bold text-black focus:outline-none focus:border-amber-400 transition-all shadow-sm" />
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input type="text" placeholder="Opção 1" value={newPoll.option1} onChange={e => setNewPoll({...newPoll, option1: e.target.value})} className="flex-1 px-5 py-4 bg-white border border-gray-100 rounded-[1.5rem] text-sm font-bold text-black focus:outline-none focus:border-amber-400 transition-all shadow-sm" />
                            <input type="text" placeholder="Opção 2" value={newPoll.option2} onChange={e => setNewPoll({...newPoll, option2: e.target.value})} className="flex-1 px-5 py-4 bg-white border border-gray-100 rounded-[1.5rem] text-sm font-bold text-black focus:outline-none focus:border-amber-400 transition-all shadow-sm" />
                        </div>
                        <button onClick={handleAddPoll} className="w-full bg-black text-white px-8 py-4 rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-[#C41E1E] transition cursor-pointer shadow-lg shadow-black/20">Criar Nova Enquete</button>
                    </div>

                    <div className="space-y-4">
                        {polls.length === 0 && <p className="text-center text-gray-400 text-xs font-bold uppercase italic py-10">Nenhuma enquete ativa.</p>}
                        {polls.map(poll => (
                            <div key={poll.id} className="p-5 border border-gray-100 rounded-[1.5rem] shadow-sm relative">
                                <button onClick={() => handleDeletePoll(poll.id)} className="absolute top-4 right-4 text-gray-300 hover:text-red-500 cursor-pointer"><IconTrash size={16}/></button>
                                <h4 className="font-black text-black tracking-tight mb-4 pr-8 uppercase">{poll.question}</h4>
                                <div className="space-y-2">
                                    {poll.options.map((opt: any) => {
                                        const totalVotes = Object.keys(poll.votes || {}).length;
                                        const optionVotes = Object.values(poll.votes || {}).filter(v => v === opt.id).length;
                                        const pct = totalVotes > 0 ? Math.round((optionVotes / totalVotes) * 100) : 0;
                                        return (
                                            <div key={opt.id} className="relative bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                                                <div style={{width: `${pct}%`}} className="absolute top-0 left-0 h-full bg-amber-200"></div>
                                                <div className="relative z-10 p-3 flex justify-between text-xs font-bold uppercase tracking-widest text-gray-700">
                                                    <span>{opt.text}</span>
                                                    <span>{pct}% ({optionVotes})</span>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

          </div>
        )}
      </main>

      {/* MODAL PAGAMENTO (ALUNO) */}
      {selectedPaymentMonth !== null && !isAdmin && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full max-w-sm rounded-t-[3rem] sm:rounded-[3rem] relative flex flex-col max-h-[90vh] shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-black via-[#C41E1E] to-black opacity-20 z-10"></div>
            <div className="p-6 text-center border-b border-gray-50 relative flex-shrink-0">
              <button onClick={() => setSelectedPaymentMonth(null)} className="absolute right-4 top-4 bg-gray-100 text-gray-500 hover:text-black rounded-full p-2 transition active:scale-90 z-20 cursor-pointer"><IconX size={20}/></button>
              <h3 className="text-2xl font-black uppercase mt-2">{monthData[selectedPaymentMonth].name} ✦</h3>
              <p className="text-3xl font-black mt-1">R$ {monthData[selectedPaymentMonth].value},00</p>
            </div>
            <div className="p-6 text-center overflow-y-auto flex-1">
              <div className="bg-white p-3 rounded-2xl shadow-inner border border-gray-100 mx-auto w-48 mb-6">
                <img src={qrCodeUrl} alt="Pix" className="w-full h-auto rounded-xl" />
              </div>
              <div className="text-left bg-[#F5F4EF] p-5 rounded-2xl mb-6 shadow-inner border border-white">
                <p className="text-[10px] font-black text-gray-400 uppercase mb-2 flex items-center gap-1.5"><IconQrCode size={14} className="text-[#C41E1E]"/> Pix Copia e Cola</p>
                <div className="flex items-center gap-3">
                  <input type="text" readOnly value={currentPixCode} className="flex-1 bg-transparent text-black font-black text-xs focus:outline-none truncate" />
                  <button onClick={handleCopyPix} className="bg-black text-white p-3 rounded-xl active:scale-90 transition cursor-pointer">{copied ? <IconCheck size={16} /> : <IconCopy size={16} />}</button>
                </div>
              </div>
              <div className="mb-6 p-4 bg-red-50 rounded-xl flex items-start gap-3 text-left border border-red-100">
                <input type="checkbox" checked={termsAccepted} onChange={e => setTermsAccepted(e.target.checked)} className="mt-1 w-5 h-5 accent-[#C41E1E] cursor-pointer flex-shrink-0" />
                <label className="text-[10px] leading-tight text-red-800 font-bold uppercase select-none">Concordo que o valor não é reembolsável e o pagamento total é obrigatório até o final.</label>
              </div>
              <button disabled={!termsAccepted} onClick={() => handleDeclarePayment(selectedPaymentMonth)} className={`w-full py-5 rounded-[1.5rem] font-black transition active:scale-95 flex justify-center items-center gap-3 uppercase text-sm ${termsAccepted ? 'bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 cursor-pointer' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}><IconCheckCircle2 size={20} /> Confirmar Pagamento</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL GESTÃO PARCELA ADMIN E VISUALIZADOR DE IMAGENS */}
      {adminManageInst && isAdmin && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[500] flex items-center justify-center p-4">
            <div className="bg-white rounded-[3rem] w-full max-w-md p-8 shadow-2xl relative border border-white/50 flex flex-col max-h-[90vh]">
                <div className="flex-shrink-0 relative border-b border-gray-50 pb-4 mb-4">
                    <button onClick={() => setAdminManageInst(null)} className="absolute right-0 top-0 bg-gray-100 text-gray-500 p-2 rounded-full hover:bg-gray-200 transition cursor-pointer z-20"><IconX size={16}/></button>
                    <h3 className="text-2xl font-black uppercase mb-1 pr-10 truncate">{adminManageInst.client.name}</h3>
                    <p className="text-gray-500 font-bold uppercase text-[10px]">Mês {adminManageInst.month} - {monthData[adminManageInst.month].name}</p>
                </div>
                <div className="overflow-y-auto flex-1 pr-2">
                    <div className="mb-6 bg-[#F5F4EF] p-5 rounded-[2rem] border border-white shadow-inner">
                        <label className="text-[10px] font-black uppercase text-gray-400 mb-3 block">Status Financeiro</label>
                        <div className="grid grid-cols-2 gap-2">
                            <button onClick={() => updateAdminInstStatus('pending')} className={`py-3 rounded-xl font-black text-[9px] uppercase transition cursor-pointer ${(!adminManageInst.inst || adminManageInst.inst?.status === 'pending') ? 'bg-gray-800 text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'}`}>Pendente</button>
                            <button onClick={() => updateAdminInstStatus('review')} className={`py-3 rounded-xl font-black text-[9px] uppercase transition cursor-pointer ${adminManageInst.inst?.status === 'review' ? 'bg-amber-500 text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'}`}>Análise</button>
                            <button onClick={() => updateAdminInstStatus('paid')} className={`py-3 rounded-xl font-black text-[9px] uppercase transition cursor-pointer ${adminManageInst.inst?.status === 'paid' ? 'bg-green-500 text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'}`}>Pago (Total)</button>
                            <button onClick={() => updateAdminInstStatus('partial')} className={`py-3 rounded-xl font-black text-[9px] uppercase transition cursor-pointer ${adminManageInst.inst?.status === 'partial' ? 'bg-blue-500 text-white shadow-md' : 'bg-white text-blue-500 border border-blue-200 hover:bg-blue-50'}`}>1 Dia (R$60)</button>
                            <button onClick={() => updateAdminInstStatus('canceled')} className={`col-span-2 py-3 rounded-xl font-black text-[9px] uppercase transition cursor-pointer ${adminManageInst.inst?.status === 'canceled' ? 'bg-red-500 text-white shadow-md' : 'bg-white text-red-500 border border-red-200 hover:bg-red-50'}`}>Cancelado / Refazer</button>
                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="text-[10px] font-black uppercase text-gray-400 mb-3 flex items-center gap-2"><IconPaperclip size={12}/> Comprovativo Anexado</label>
                        {adminManageInst.inst?.receipt ? (
                            <div className="relative group rounded-[2rem] overflow-hidden border-4 border-gray-100 shadow-sm cursor-zoom-in" onClick={() => setViewingImage(adminManageInst.inst.receipt)}>
                               <img src={adminManageInst.inst.receipt} className="w-full h-48 object-cover" alt="Comprovativo" />
                               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 backdrop-blur-sm">
                                  <button onClick={(e) => { e.stopPropagation(); setViewingImage(adminManageInst.inst.receipt); }} className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-black uppercase cursor-pointer hover:bg-amber-400 shadow-lg">
                                      Ver Imagem (Ampliar)
                                  </button>
                                  <div className="flex gap-2">
                                     <a href={adminManageInst.inst.receipt} download={`Comprov_${adminManageInst.client.name}_M${adminManageInst.month}.jpg`} onClick={(e) => e.stopPropagation()} className="bg-stone-800 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase cursor-pointer hover:bg-stone-700">Baixar</a>
                                     <button onClick={(e) => { e.stopPropagation(); removeReceipt(); }} className="bg-red-500 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase cursor-pointer hover:bg-red-600">Apagar</button>
                                  </div>
                               </div>
                            </div>
                        ) : (
                            <label className="border-2 border-dashed border-gray-200 rounded-[2rem] h-32 flex flex-col items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-amber-50 hover:border-amber-400 transition cursor-pointer bg-gray-50">
                                <IconUpload size={24} className="mb-2" /><span className="text-[10px] font-black uppercase">Upload Imagem</span>
                                <input type="file" accept="image/*" className="hidden" onChange={handleReceiptUpload} />
                            </label>
                        )}
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* VISUALIZADOR DE IMAGEM EM TELA CHEIA */}
      {viewingImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999999] flex items-center justify-center p-4 cursor-zoom-out animate-in zoom-in duration-200" onClick={() => setViewingImage(null)}>
           <button onClick={() => setViewingImage(null)} className="absolute right-6 top-6 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full transition cursor-pointer z-50">
               <IconX size={24}/>
           </button>
           <img src={viewingImage} alt="Comprovativo Ampliado" className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-default" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {/* RENDERIZAR MODAL DE ADMIN AQUI NO FINAL GARANTE QUE FUNCIONE ESTANDO LOGADO OU NÃO */}
      {renderAdminModal()}

    </div>
  );
}
