"use client";
import React, { useState } from 'react';

// Next.js components often assume Tailwind CSS or similar styling,
// but since the original was plain HTML, we will keep the CSS in a <style> tag
// inside the component for simplicity, using standard React syntax.

const ContentSeedingDashboard = () => {
    // Webhook Configuration (Moved to variables inside the component)
    const BRAND_WEBHOOK = 'https://myaibo2025.app.n8n.cloud/webhook/6acbafe8-34de-4d8a-bc8f-c90ccdda9d96';
    const CATEGORY_WEBHOOK = 'https://myaibo2025.app.n8n.cloud/webhook/26cba4c5-d3a4-4799-9fe8-6254ef6f9890';
    const INFLUENCER_WEBHOOK = 'https://myaibo2025.app.n8n.cloud/webhook/df055460-adf5-42b2-a7e0-410bc0f498ac';

    // State management for form messages and loading
    const [brandState, setBrandState] = useState({ message: '', type: '' });
    const [categoryState, setCategoryState] = useState({ message: '', type: '' });
    const [influencerState, setInfluencerState] = useState({ message: '', type: '' });
    const [brandLoading, setBrandLoading] = useState(false);
    const [categoryLoading, setCategoryLoading] = useState(false);
    const [influencerLoading, setInfluencerLoading] = useState(false);

    // Utility function to handle API submission
    const handleSubmit = async (e, webhookUrl, payload, setLoading, setState, formId) => {
        e.preventDefault();
        
        // Basic client-side validation based on form ID
        let isValid = true;
        if (formId === 'brand-form' && !payload.keywords) {
            setState({ message: 'Please enter keywords.', type: 'error' });
            isValid = false;
        } else if (formId === 'category-form' && (!payload.subreddit || !payload.keyword)) {
            setState({ message: 'Please enter both subreddit and keyword.', type: 'error' });
            isValid = false;
        } else if (formId === 'influencer-form' && !payload.keyword) {
            setState({ message: 'Please enter a keyword.', type: 'error' });
            isValid = false;
        }

        if (!isValid) return;

        setLoading(true);
        setState({ message: 'Sending...', type: '' });

        try {
            const resp = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            let bodyText = await resp.text();
            if (resp.ok) {
                setState({ message: 'Success — webhook returned: ' + (bodyText || 'OK'), type: 'success' });
                // Reset form inputs (using native DOM access for simplicity)
                document.getElementById(formId).reset(); 
            } else {
                setState({ message: 'Webhook returned error: ' + (bodyText || resp.statusText), type: 'error' });
            }
        } catch (err) {
            setState({ message: 'Network error: ' + err.message, type: 'error' });
        } finally {
            setLoading(false);
        }
    };
    
    // Accessibility enhancement: clear message on input change
    const clearMessages = () => {
        setBrandState({ message: '', type: '' });
        setCategoryState({ message: '', type: '' });
        setInfluencerState({ message: '', type: '' });
    };

    return (
        <>
            <style jsx global>{`
                /* Variables */
                :root{
                  --bg:#f7f8fb; --card:#ffffff; --accent:#2563eb; --success:#16a34a; --danger:#dc2626;
                  --muted:#6b7280; --radius:12px;
                }
                /* Global Styles */
                *{box-sizing:border-box}
                body{
                  margin:0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
                  background:linear-gradient(180deg,var(--bg),#ffffff); color:#111827; padding:28px;
                }
                .main-header {
                  max-width: 1200px;
                  margin: 0 auto 30px;
                  text-align: center;
                  font-size: 36px;
                  font-weight: 700;
                  color: var(--accent);
                  padding: 15px;
                  border-bottom: 2px solid #e6e9ef;
                }
                .container{max-width:1200px; margin:0 auto;display:grid;grid-template-columns:1fr;gap:25px}
                @media(min-width:900px){ 
                  .container{grid-template-columns:1fr 1fr} 
                  /* Rule to center the third card on desktop. Applies to Sub Reddit and Keyword Search now. */
                  .container section:nth-child(3) {
                    grid-column: 1 / -1;
                    justify-self: center;
                    max-width: 588px;
                    width: 100%;
                  }
                }
                .card{
                  background:var(--card); border-radius:var(--radius); padding:30px; box-shadow:0 6px 18px rgba(17,24,39,0.06);
                  border:1px solid rgba(15,23,42,0.03);
                }
                h2{margin:0 0 10px;font-size:22px}
                label{display:block;margin:12px 0 8px;font-weight:600; font-size: 16px;}
                input[type="text"], input[type="search"]{
                  width:100%; padding:14px 16px; border-radius:10px; border:1px solid #e6e9ef; font-size:16px;
                }
                .row{display:flex; gap:15px}
                .actions{margin-top:20px; display:flex; gap:15px; align-items:center}
                button{
                  background:var(--accent); color:white; border:0; padding:12px 18px; border-radius:10px; cursor:pointer;
                  font-weight:600; display:inline-flex; align-items:center; gap:8px; font-size: 16px;
                }
                button[disabled]{opacity:0.6; cursor:not-allowed}
                .note{font-size:14px; color:var(--muted); margin-top:8px}
                .message{margin-top:15px; padding:12px 14px; border-radius:10px; font-weight:600; font-size: 16px;}
                .success{background:rgba(22,163,74,0.08); color:var(--success); border:1px solid rgba(22,163,74,0.12)}
                .error{background:rgba(220,38,38,0.06); color:var(--danger); border:1px solid rgba(220,38,38,0.12)}
                small.muted{display:block;color:var(--muted);font-size:13px;margin-top:10px}
                .inline-field{flex:1}
                .field-error{color:var(--danger); font-size:14px; margin-top:8px}

                /* Specific message styles within the component */
                .state-message {
                    font-size: 14px; 
                    color: var(--muted); 
                    margin-top: 8px;
                    padding: 0;
                }
                .state-message.success, .state-message.error {
                    margin-top: 15px; 
                    padding: 12px 14px; 
                    border-radius: 10px; 
                    font-weight: 600; 
                    font-size: 16px;
                }
            `}</style>

            <header className="main-header">
                Reddit Content Seeding Dashboard
            </header>
            
            <main className="container" aria-live="polite">
                
                {/* Card 1: Brand search */}
                <section className="card" aria-labelledby="brand-heading">
                    <h2 id="brand-heading">Reddit Keywords Search</h2>
                    <form 
                        id="brand-form" 
                        onSubmit={(e) => {
                            const keywords = e.target.keywords.value.trim();
                            const payload = { type: 'brand_search', keywords };
                            handleSubmit(e, BRAND_WEBHOOK, payload, setBrandLoading, setBrandState, 'brand-form');
                        }}
                        autoComplete="off" 
                        noValidate
                    >
                        <input 
                            id="brand-keywords" 
                            name="keywords" 
                            type="text" 
                            placeholder="e.g. brandname, product, feature" 
                            required 
                            onChange={clearMessages}
                        />
                        <div className="field-error" role="status" aria-live="polite" style={{ display: brandState.type === 'error' ? 'block' : 'none' }}>
                            {brandState.type === 'error' && brandState.message}
                        </div>

                        <div className="actions">
                            <button type="submit" disabled={brandLoading}>
                                {brandLoading ? 'Sending...' : 'Submit'}
                            </button>
                            <div className={`state-message ${brandState.type}`}>
                                {brandState.type === 'success' && brandState.message}
                                {brandState.type === '' && brandState.message}
                            </div>
                        </div>
                    </form>
                </section>

                {/* Card 2: Influencer search (NEW POSITION) */}
                <section className="card" aria-labelledby="influencer-heading">
                    <h2 id="influencer-heading">Influencer Search</h2>
                    <form 
                        id="influencer-form" 
                        onSubmit={(e) => {
                            const keyword = e.target.keyword.value.trim();
                            const payload = { type: 'influencer_search', keyword };
                            handleSubmit(e, INFLUENCER_WEBHOOK, payload, setInfluencerLoading, setInfluencerState, 'influencer-form');
                        }}
                        autoComplete="off" 
                        noValidate
                    >
                        <input 
                            id="influencer-keyword" 
                            name="keyword" 
                            type="text" 
                            placeholder="e.g. influencer, creator" 
                            required 
                            onChange={clearMessages}
                        />
                         <div className="field-error" role="status" aria-live="polite" style={{ display: influencerState.type === 'error' ? 'block' : 'none' }}>
                            {influencerState.type === 'error' && influencerState.message}
                        </div>

                        <div className="actions">
                            <button type="submit" disabled={influencerLoading}>
                                {influencerLoading ? 'Sending...' : 'Submit'}
                            </button>
                            <div className={`state-message ${influencerState.type}`}>
                                {influencerState.type === 'success' && influencerState.message}
                                {influencerState.type === '' && influencerState.message}
                            </div>
                        </div>
                    </form>
                </section>

                {/* Card 3: Category search (Sub Reddit and Keyword Search) (NEW POSITION - CENTERED) */}
                <section className="card" aria-labelledby="cat-heading">
                    <h2 id="cat-heading">Sub Reddit and Keyword Search</h2>
                    <form 
                        id="category-form" 
                        onSubmit={(e) => {
                            const subreddit = e.target.subreddit.value.trim();
                            const keyword = e.target.keyword.value.trim();
                            const payload = { type: 'category_search', subreddit, keyword };
                            handleSubmit(e, CATEGORY_WEBHOOK, payload, setCategoryLoading, setCategoryState, 'category-form');
                        }}
                        autoComplete="off" 
                        noValidate
                    >
                        <div className="row">
                            <div className="inline-field">
                                <label htmlFor="subreddit">Subreddit</label>
                                <input id="subreddit" name="subreddit" type="text" placeholder="e.g. r/india or india" required onChange={clearMessages} />
                            </div>
                        </div>

                        <label htmlFor="category-keyword">Keyword</label>
                        <input id="category-keyword" name="keyword" type="text" placeholder="e.g. snack, battery" required onChange={clearMessages} />
                        <div className="field-error" role="status" aria-live="polite" style={{ display: categoryState.type === 'error' ? 'block' : 'none' }}>
                            {categoryState.type === 'error' && categoryState.message}
                        </div>

                        <div className="actions">
                            <button type="submit" disabled={categoryLoading}>
                                {categoryLoading ? 'Sending...' : 'Submit'}
                            </button>
                            <div className={`state-message ${categoryState.type}`}>
                                {categoryState.type === 'success' && categoryState.message}
                                {categoryState.type === '' && categoryState.message}
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
};

export default ContentSeedingDashboard;