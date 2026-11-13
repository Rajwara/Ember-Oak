document.addEventListener('submit', (event) => {
  const form = event.target;
  if (!form.matches('form[data-local-preview]')) return;
  event.preventDefault();
  event.stopImmediatePropagation();

  let status = form.querySelector('[role="status"]');
  if (!status) {
    status = document.createElement('p');
    status.setAttribute('role', 'status');
    form.append(status);
  }
  status.textContent = 'Form submission is disabled in this local preview.';
}, true);
