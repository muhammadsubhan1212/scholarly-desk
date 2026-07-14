import { delay } from '../utils/helpers';

/**
 * MOCK price matrix inspired by typical PK academic writing rates.
 * Base ~PKR 750/page for undergraduate with 15-day deadline.
 * Replace with real /get-fare Laravel endpoint later.
 */
const BASE_PRICE = 750;

const levelMultiplier = {
  1: 1,
  2: 1.25,
  3: 1.55,
};

const deadlineMultiplier = {
  1: 1,
  2: 1.05,
  3: 1.1,
  4: 1.15,
  5: 1.2,
  6: 1.3,
  7: 1.4,
  8: 1.55,
  9: 1.75,
  10: 2,
  11: 2.35,
};

function calcPerPage(academicLevelId, deadlineId) {
  const level = levelMultiplier[Number(academicLevelId)] ?? 1;
  const urgency = deadlineMultiplier[Number(deadlineId)] ?? 1;
  return Math.round(BASE_PRICE * level * urgency);
}

export async function handleMockRequest(config) {
  const method = (config.method || 'get').toLowerCase();
  const url = (config.url || '').replace(/^\//, '');
  const data = typeof config.data === 'string' ? JSON.parse(config.data || '{}') : config.data || {};

  await delay(450);

  if (method === 'post' && url === 'get-fare') {
    const per_page_price = calcPerPage(data.academic_level_id, data.deadline_id);
    return { status: 200, data: { per_page_price } };
  }

  if (method === 'post' && url === 'contact-us') {
    if (!data.name || !data.email || !data.detail) {
      return {
        status: 400,
        data: { success: false, message: 'Please complete all required fields.' },
      };
    }
    console.info('[MOCK contact-us]', data);
    return {
      status: 200,
      data: { success: true, message: 'Thanks! Our team will reply within one business hour.' },
    };
  }

  if (method === 'post' && url === 'order-now') {
    if (!data.name || !data.email || !data.paperTopic) {
      return {
        status: 400,
        data: { success: false, message: 'Missing required order details.' },
      };
    }
    const orderId = `SD-${Date.now().toString().slice(-8)}`;
    console.info('[MOCK order-now]', { orderId, ...data });
    return {
      status: 200,
      data: {
        success: true,
        orderId,
        message: `Order ${orderId} received. A coordinator will confirm pricing shortly.`,
      },
    };
  }

  if (method === 'post' && url === 'login') {
    if (!data.email || !data.password) {
      return {
        status: 400,
        data: { success: false, message: 'Email and password are required.' },
      };
    }
    const token = `mock-token-${btoa(data.email).slice(0, 16)}`;
    console.info('[MOCK login]', data.email);
    return {
      status: 200,
      data: {
        success: true,
        token,
        user: { email: data.email, name: data.email.split('@')[0] },
        message: 'Welcome back to Assignment Solution.',
      },
    };
  }

  return null;
}
